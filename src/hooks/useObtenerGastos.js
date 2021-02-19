import React, { useState, useEffect } from 'react';
import { db } from './../firebase/firebaseConfig';
import { useAuth } from './../contextos/AuthContext';

const useObtenerGastos = () => {
  const { usuario } = useAuth();
  const [gastos, setGastos] = useState([1, 2, 3]);

  useEffect(() => {
   const unsuscribe = db.collection('gastos')
      .where('uidUsuario', '==', usuario.uid)
      .orderBy('fecha', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        setGastos(snapshot.docs.map((gasto) => {
          // console.log(gasto.data());
          return {...gasto.data(), id: gasto.id}
        }));
      });

      return unsuscribe;
  }, [usuario]);

  return [gastos];
};

export default useObtenerGastos;
