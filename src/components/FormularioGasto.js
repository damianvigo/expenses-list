import React, { useState } from 'react';
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../elements/ElementosDeFormulario';
import Boton from './../elements/Boton';
import {ReactComponent as IconoPlus} from './../assets/static/icons/plus.svg'
import SelectCategorias from './SelectCategorias';
import DatePicker from './DatePicker';

const FormularioGasto = () => {
  const [inputDescripcion, setInputDescripcion] = useState('');
  const [inputCantidad, setInputCantidad] = useState('');
  const [categoria, setCategoria] = useState('hogar');
  const [fecha, setFecha] = useState(new Date());

  const handleChange = (e) => {
    if(e.target.name === 'descripcion') {
      setInputDescripcion(e.target.value);
    } else if (e.target.name === 'cantidad') {
      setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
    }
  }

  console.log(fecha)

  return ( 
      <Formulario>
        <ContenedorFiltros>
          <SelectCategorias categoria={categoria} setCategoria={setCategoria} />
          <DatePicker fecha={fecha} setFecha={setFecha} />
        </ContenedorFiltros>
        
        <div>
          <Input type='text' name='descripcion' id='descripcion' placeholder='Descripción' autoFocus value={inputDescripcion} onChange={handleChange} />
          <InputGrande type='text' name='cantidad' id='cantidad' placeholder='$0.00' value={inputCantidad} onChange={handleChange} />
        </div>
        <ContenedorBoton>
            <Boton as='button' primario conIcono type='submit'>
              Agregar Gasto <IconoPlus />
            </Boton>
        </ContenedorBoton>
      </Formulario>
   );
}
 
export default FormularioGasto;
