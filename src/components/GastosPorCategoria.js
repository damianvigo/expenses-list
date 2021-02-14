import React from 'react';
// styled components
import { Header, Titulo } from './../elements/Header';
import { Helmet } from 'react-helmet';
// components
import BtnRegresar from './../elements/BtnRegresar';

const GastosPorCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>

      <Header>
          <BtnRegresar ruta={'/lista'} />
          <Titulo>Gastos por categoria</Titulo>
      </Header>
    </>
  );
};

export default GastosPorCategoria;
