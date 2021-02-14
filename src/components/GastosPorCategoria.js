import React from 'react';
import { Header, Titulo, ContenedorHeader } from './../elements/Header';
import { Helmet } from 'react-helmet';

const GastosPorCategoria = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Gastos por categoria</Titulo>
        </ContenedorHeader>
      </Header>
    </>
  );
};

export default GastosPorCategoria;
