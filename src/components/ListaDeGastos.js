// styled components
import { Header, Titulo } from './../elements/Header';
import { Helmet } from 'react-helmet';
// components
import BtnRegresar from './../elements/BtnRegresar';
import { useAuth } from './../contextos/AuthContext';

const ListaDeGastos = () => {
  const { usuario } = useAuth();
  console.log(usuario);

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
};

export default ListaDeGastos;
