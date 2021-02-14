import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader } from './../elements/Header';
import Boton from './../elements/Boton';
import { Formulario, Input, ContenedorBoton } from './../elements/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../assets/static/icons/login.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 12.5rem; /* 200px */
  margin-bottom: 1.25rem; /* 20px */
`;

const InicioSesion = () => {
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

      <Formulario>
        <Svg />
        <Input type='email' name='email' placeholder='Tu Correo' autoFocus />
        <Input type='password' name='password' placeholder='Tu Contraseña' />
        <ContenedorBoton>
          <Boton as='button' primario type='submit'>
          Iniciar Sesión
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default InicioSesion;
