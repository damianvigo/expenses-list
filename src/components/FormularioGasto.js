import React, { useState } from 'react';
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../elements/ElementosDeFormulario';
import Boton from './../elements/Boton';
import { ReactComponent as IconoPlus } from './../assets/static/icons/plus.svg';
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import agregarGasto from './../firebase/agregarGasto';
import { useAuth } from './../contextos/AuthContext';
import Alerta from './../elements/Alerta';

const FormularioGasto = () => {
  const [inputDescripcion, setInputDescripcion] = useState('');
  const [inputCantidad, setInputCantidad] = useState('');
  const [categoria, setCategoria] = useState('hogar');
  const [fecha, setFecha] = useState(new Date());
  const [estadoAlerta, setEstadoAlerta] = useState(false);
  const [alerta, setAlerta] = useState({});

  const { usuario } = useAuth();

  const handleChange = (e) => {
    if (e.target.name === 'descripcion') {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === 'cantidad') {
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
    }
  };

  // console.log(fecha);

  const handleSubmit = (e) => {
    e.preventDefault();
    let cantidad = parseFloat(inputCantidad).toFixed(2);

    //Compruebo que hay una descripcion y valor
    if (inputDescripcion !== '' && inputCantidad !== '') {
      if (cantidad) {
        agregarGasto({
          categoria: categoria,
          descripcion: inputDescripcion,
          cantidad: cantidad,
          fecha: getUnixTime(fecha),
          uidUsuario: usuario.uid,
        }).then(() => {
          setCategoria('hogar');
          setInputDescripcion('');
          setInputCantidad('');
          setFecha(new Date());

          setEstadoAlerta(true);
          setAlerta({
            tipo: 'exito',
            mensaje: 'El gasto fue agregado correctamente',
          });
        })
        .catch((error) => {
          setEstadoAlerta(true);
          setAlerta({
            tipo: 'error',
            mensaje: 'Hubo un problema al intentar agregar tu gasto',
          });
        })
      } else {
        setEstadoAlerta(true);
        setAlerta({
          tipo: 'error',
          mensaje: 'El valor que ingresaste no es correcto',
        });
      }
    } else {
      setEstadoAlerta(true);
      setAlerta({
        tipo: 'error',
        mensaje: 'Por favor completa todos los campos',
      });
    }
  };

  return (
    <Formulario onSubmit={handleSubmit}>
      <ContenedorFiltros>
        <SelectCategorias categoria={categoria} setCategoria={setCategoria} />
        <DatePicker fecha={fecha} setFecha={setFecha} />
      </ContenedorFiltros>

      <div>
        <Input
          type='text'
          name='descripcion'
          id='descripcion'
          placeholder='Descripción'
          autoFocus
          value={inputDescripcion}
          onChange={handleChange}
        />
        <InputGrande type='text' name='cantidad' id='cantidad' placeholder='$0.00' value={inputCantidad} onChange={handleChange} />
      </div>
      <ContenedorBoton>
        <Boton as='button' primario conIcono type='submit'>
          Agregar Gasto <IconoPlus />
        </Boton>
      </ContenedorBoton>
      <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
    </Formulario>
  );
};

export default FormularioGasto;
