import React from 'react';
// styled components
import { Header, Titulo } from './../elements/Header';
import { Helmet } from 'react-helmet';
// components
import BtnRegresar from './../elements/BtnRegresar';

const ListaDeGastos = () => {
  return ( 
    <>
    <Helmet>
      <title>Lista de Gastos</title>
    </Helmet>

    <Header>
        <BtnRegresar />
        <Titulo>Lista de Gastos</Titulo>
    </Header>
  </>
   );
}
 
export default ListaDeGastos;