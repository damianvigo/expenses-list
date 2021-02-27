import React from 'react';
// styled components
import { Header, Titulo } from './../elements/Header';
import { Helmet } from 'react-helmet';
// components
import BtnRegresar from './../elements/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastosDelMesPorCategoria from './../hooks/useObtenerGastosDelMesPorCategoria';

const GastosPorCategoria = () => {
 const gastos = useObtenerGastosDelMesPorCategoria();
  console.log(gastos);

  return (
    <>
      <Helmet>
        <title>Gastos por Categoria</title>
      </Helmet>

      <Header>
       {/*   ruta={'/lista'} */}
          <BtnRegresar  />
          <Titulo>Gastos por categoria</Titulo>
      </Header>

      <BarraTotalGastado />
    </>
  );
};

export default GastosPorCategoria;
