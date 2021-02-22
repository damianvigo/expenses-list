import React from 'react';

import { ReactComponent as IconoComida } from './../assets/static/icons/cat_comida.svg';
import { ReactComponent as IconoCompras } from './../assets/static/icons/cat_compras.svg';
import { ReactComponent as IconoCuentasYPagos } from './../assets/static/icons/cat_cuentas-y-pagos.svg';
import { ReactComponent as IconoDiversion } from './../assets/static/icons/cat_diversion.svg';
import { ReactComponent as IconoHogar } from './../assets/static/icons/cat_hogar.svg';
import { ReactComponent as IconoRopa } from './../assets/static/icons/cat_ropa.svg';
import { ReactComponent as IconoSaludEHigiene } from './../assets/static/icons/cat_salud-e-higiene.svg';
import { ReactComponent as IconoTransporte } from './../assets/static/icons/cat_transporte.svg';

const IconoCategoria = ({ id }) => {
  switch (id) {
    case 'comida':
      return <IconoComida />;
    case 'compras':
      return <IconoCompras />;
    case 'cuentas y pagos':
      return <IconoCuentasYPagos />;
    case 'diversion':
      return <IconoDiversion />;
    case 'hogar':
      return <IconoHogar />;
    case 'ropa':
      return <IconoRopa />;
    case 'salud e higiene':
      return <IconoSaludEHigiene />;
    case 'transporte':
      return <IconoTransporte />;
    default:
      break;
  }
};

export default IconoCategoria;
