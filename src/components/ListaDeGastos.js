import React from 'react';
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
import { ReactComponent as IconoEditar } from './../assets/static/icons/editar.svg';
import { ReactComponent as IconoBorrar } from './../assets/static/icons/borrar.svg';
import { Link } from 'react-router-dom';
import Boton from './../elements/Boton';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';

const ListaDeGastos = () => {
  const [gastos] = useObtenerGastos();
  console.log(gastos);

  /*   const formatearFecha = (fecha) => {
    return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", {locale: es})
  }

  const fechaEsIgual = (gastos, index, gasto) => {
    if(index !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaGastoAnterior = formatearFecha(gastos[index - 1].fecha);

      console.log(fechaActual, fechaGastoAnterior)

      if(fechaActual === fechaGastoAnterior) {
        return true;
      } else {
        return false;
      }
   
    }
  } */

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
        {gastos.map((gasto, index) => {
          return (
            <div key={gasto.id}>
              {/*     {!fechaEsIgual(gastos, index, gasto) && <Fecha>{formatearFecha(gasto.fecha)}</Fecha>} */}
              <ElementoLista key={gasto.id}>
                <Categoria>
                  {/* <IconoCategoria id={gasto.categoria} /> */}
                  {gasto.categoria}
                </Categoria>

                <Descripcion>{gasto.descripcion}</Descripcion>

                <Valor>{convertirAMoneda(gasto.cantidad)}</Valor>

                <ContenedorBotones>
                  <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                    <IconoEditar />
                  </BotonAccion>
                  <BotonAccion>
                    <IconoBorrar />
                  </BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          );
        })}

        <ContenedorBotonCentral>
          <BotonCargarMas>Cargar más</BotonCargarMas>
        </ContenedorBotonCentral>

        {gastos.length === 0 && (
          <ContenedorSubtitulo>
            <Subtitulo>No hay gastos por mostrar</Subtitulo>
            <Boton as={Link} to='/'>
              Agregar gasto
            </Boton>
          </ContenedorSubtitulo>
        )}
      </Lista>

      <BarraTotalGastado />
    </>
  );
};

export default ListaDeGastos;
