import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader } from './../elements/Header';
import Boton from './../elements/Boton';
import { Formulario, Input, ContenedorBoton } from './../elements/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../assets/static/icons/login.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { auth } from './../firebase/firebaseConfig';
import Alerta from './../elements/Alerta';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 200px */
  margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setCorreo(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  // console.log(correo, password)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});
    // console.log(correo, password, password2);

    // validacion del lado del cliente
    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!expresionRegular.test(correo)) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Introduzca una dirección de correo electrónico válida',
      });
      return;
    }

    if (correo === '' || password === '') {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Complete todos los datos',
      });
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(correo, password);
      history.push('/');
    } catch (error) {
      // console.log(error);
      setEstadoAlerta(true);
      let mensaje = '';
      switch (error.code) {
        case 'auth/wrong-password':
          mensaje = 'La contraseña no es correcta';
          break;
        case 'auth/user-not-found':
          mensaje = 'No se encontro ninguna cuenta con este correo electrónico'
        default:
          mensaje = 'Hubo un error al intentar crear la cuenta.';
          break;
      }

      setAlerta({ tipo: 'error', mensaje: mensaje });
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Iniciar Sesión</Titulo>
          <div>
            <Boton to='/crear-cuenta'>Registrarse</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type='email' name='email' placeholder='Tu Correo' autoFocus value={correo} onChange={handleChange} />
        <Input type='password' name='password' placeholder='Tu Contraseña' value={password} onChange={handleChange} />
        <ContenedorBoton>
          <Boton as='button' primario type='submit'>
            Iniciar Sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>

      <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
    </>
  );
};

export default InicioSesion;
