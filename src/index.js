import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
// routes
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import EditarGasto from './components/EditarGasto';
import GastosPorCategoria from './components/GastosPorCategoria';
import InicioSesion from './components/InicioSesion';
import ListaDeGastos from './components/ListaDeGastos';
import RegistroUsuarios from './components/RegistroUsuarios';
// metas
import { Helmet } from 'react-helmet';
import favicon from './assets/static/icons/logo.png';
// elements
import Contendor from './elements/Contenedor';
import Fondo from './elements/Fondo';
import { AuthProvider } from './contextos/AuthContext';
import RutaPrivada from './components/RutaPrivada';
import { TotalGastadoProvider } from './contextos/TotalGastadoEnElMesContext';

WebFont.load({
  google: {
    families: ['Work Sans: 400,500,700', 'sans-serif'],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel='shortcut icon' href={favicon} type='image/x-icon' />
      </Helmet>

      <AuthProvider>
        <TotalGastadoProvider>
          <BrowserRouter>
            <Contendor>
              <Switch>
                <Route path='/iniciar-sesion' component={InicioSesion} />
                <Route path='/crear-cuenta' component={RegistroUsuarios} />

                <RutaPrivada path='/categorias'>
                  <GastosPorCategoria />
                </RutaPrivada>
                <RutaPrivada path='/lista'>
                  <ListaDeGastos />
                </RutaPrivada>
                <RutaPrivada path='/editar/:id'>
                  <EditarGasto />
                </RutaPrivada>
                <RutaPrivada path='/'>
                  <App />
                </RutaPrivada>

                {/* <Route path='/categorias' component={GastosPorCategoria} /> */}
                {/* <Route path='/lista' component={ListaDeGastos} /> */}
                {/* <Route path='/editar/:id' component={EditarGasto} /> */}
                {/* <Route path='/' component={App} /> */}
              </Switch>
            </Contendor>
          </BrowserRouter>
        </TotalGastadoProvider>
      </AuthProvider>

      <Fondo />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
