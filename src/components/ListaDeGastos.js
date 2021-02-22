// styled components
import { Header, Titulo } from './../elements/Header';
import { Helmet } from 'react-helmet';
// components
import BtnRegresar from './../elements/BtnRegresar';
import BarraTotalGastado from './BarraTotalGastado';
import useObtenerGastos from './../hooks/useObtenerGastos';
import {
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo,
} from './../elements/ElementosDeLista';
import IconoCategoria from './../elements/IconoCategoria';
import convertirAMoneda from './../functions/convertirAMoneda';
import {ReactComponent as IconoEditar} from './../assets/static/icons/editar.svg'
import {ReactComponent as IconoBorrar} from './../assets/static/icons/borrar.svg'
import { Link } from 'react-router-dom';
import Boton from './../elements/Boton';

const ListaDeGastos = () => {
  const [gastos] = useObtenerGastos();
  console.log(gastos)
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <BtnRegresar />
        <Titulo>Lista de Gastos</Titulo>
      </Header>
      
      <Lista>
        {gastos.map((gasto) => {
          return(
            <ElementoLista key={gasto.id}>
              <Categoria>
                {/* <IconoCategoria nombre={gasto.categoria} /> */}
                {gasto.categoria}
              </Categoria>

              <Descripcion>
                {gasto.descripcion}
              </Descripcion>

              <Valor>
                {convertirAMoneda(gasto.cantidad)}
              </Valor>

              <ContenedorBotones>
                <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                  <IconoEditar />
                </BotonAccion>
                <BotonAccion>
                  <IconoBorrar />
                </BotonAccion>
              </ContenedorBotones>
            </ElementoLista>
          );
        })}

        <ContenedorBotonCentral>
          <BotonCargarMas>Cargar más</BotonCargarMas>
        </ContenedorBotonCentral>

        {gastos.length === 0 &&
          <ContenedorSubtitulo>
            <Subtitulo>No hay gastos por mostrar</Subtitulo>
            <Boton as={Link} to='/'>Agregar gasto</Boton>
          </ContenedorSubtitulo>
        }
      </Lista>

      <BarraTotalGastado />
    </>
  );
};

export default ListaDeGastos;
