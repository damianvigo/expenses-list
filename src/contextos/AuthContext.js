import React, { useState, useContext, useEffect } from 'react';
import { auth } from './../firebase/firebaseConfig'

const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
  const [usuario, setUsuario] = useState();
  // state para saber cuando termina de cargar la comprobacion de onAuthStateChanged
  const [cargando, setCargando] = useState(true);

  // Compruebo una sola vez
  useEffect(() => {
    // Compruebo si hay un usuario
   const cancelarSuscripcion = auth.onAuthStateChanged((usuario) => {
     setUsuario(usuario);
     setCargando(false);
    });

    return cancelarSuscripcion;
  }, []);

  return ( 
    <AuthContext.Provider value={{usuario: usuario}}>
      {!cargando && children}
    </AuthContext.Provider>
   );
}
 
export {AuthProvider, AuthContext, useAuth};