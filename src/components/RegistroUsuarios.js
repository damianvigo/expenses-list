import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader } from './../elements/Header';
import Boton from './../elements/Boton';
import { Formulario, Input, ContenedorBoton } from './../elements/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../assets/static/icons/registro.svg';
import styled from 'styled-components';
import { auth } from './../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
import Alerta from './../elements/Alerta';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const handleChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'email':
        setCorreo(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'password2':
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

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
        mensaje: 'Introduzca una dirección de correo electrónico válida'
      })
      return;
    }

    if (correo === '' || password === '' || password2 === '') {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Complete todos los datos'
      })
      return;
    }

    if (password !== password2) {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Las contrasenas no coinciden'
      })
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(correo, password);
      history.push('/');
    } catch (error) {

      setEstadoAlerta(true);

      let mensaje = '';
      switch (error.code) {
        case 'auth/invalid-password':
          mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.';
          break;
        case 'auth/email-already-in-use':
          mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.';
          break;
        case 'auth/invalid-email':
          mensaje = 'El correo electrónico no es válido.';
          break;
        default:
          mensaje = 'Hubo un error al intentar crear la cuenta.';
          break;
      }

      setAlerta({tipo: 'error', mensaje: mensaje})

    }
  };

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Crear Cuenta</Titulo>
          <div>
            <Boton to='/iniciar-sesion'>Iniciar Sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>

      <Formulario onSubmit={handleSubmit}>
        <Svg />
        <Input type='email' name='email' placeholder='Tu Correo' autoFocus value={correo} onChange={handleChange} />
        <Input type='password' name='password' placeholder='Tu Contraseña' value={password} onChange={handleChange} />
        <Input type='password' name='password2' placeholder='Repetir la Contraseña' value={password2} onChange={handleChange} />
        <ContenedorBoton>
          <Boton as='button' primario type='submit'>
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>

      <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
    </>
  );
};

export default RegistroUsuarios;
