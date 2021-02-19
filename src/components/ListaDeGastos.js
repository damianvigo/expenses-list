// styled components
import { Header, Titulo } from './../elements/Header';
import { Helmet } from 'react-helmet';
// components
import BtnRegresar from './../elements/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';

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

      <BarraTotalGastado />
    </>
  );
};

export default ListaDeGastos;
