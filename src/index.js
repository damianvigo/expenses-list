import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contendor from './elements/Contenedor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import EditarGasto from './components/EditarGasto'
import GastosPorCategoria from './components/GastosPorCategoria'
import InicioSesion from './components/InicioSesion'
import ListaDeGastos from './components/ListaDeGastos'
import RegistroUsuarios from './components/RegistroUsuarios'

WebFont.load({
  google: {
    families: ['Work Sans: 400,500,700', 'sans-serif'],
  },
});

const Index = () => {
  return (
    <BrowserRouter>
      <Contendor>
        <Switch>
          <Route path='/iniciar-sesion' component={InicioSesion} />
          <Route path='/crear-cuenta' component={RegistroUsuarios} />
          <Route path='/categorias' component={GastosPorCategoria} />
          <Route path='/lista' component={ListaDeGastos} />
          <Route path='/editar/:id' component={EditarGasto} />
          <Route path='/' component={App} />
        </Switch>
      </Contendor>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
