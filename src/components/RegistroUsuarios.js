import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader } from './../elements/Header';
import Boton from './../elements/Boton';
import { Formulario, Input, ContenedorBoton } from './../elements/ElementosDeFormulario';
import { ReactComponent as SvgLogin } from './../assets/static/icons/registro.svg';
import styled from 'styled-components';

const Svg = styled(SvgLogin)`
  width: 100%;
  max-height: 6.25rem; /* 100px */
  margin-bottom: 1.25rem; /* 20px */
`;

const RegistroUsuarios = () => {
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

      <Formulario>
        <Svg />
        <Input type='email' name='email' placeholder='Tu Correo' autoFocus />
        <Input type='password' name='password' placeholder='Tu Contraseña' />
        <Input type='password' name='password2' placeholder='Repetir la Contraseña' />
        <ContenedorBoton>
          <Boton as='button' primario type='submit'>
            Crear Cuenta
          </Boton>
        </ContenedorBoton>
      </Formulario>
    </>
  );
};

export default RegistroUsuarios;
