import { useState, useEffect } from 'react';
import { db } from './../firebase/firebaseConfig';
import { useAuth } from './../contextos/AuthContext';

const useObtenerGastos = () => {
  const { usuario } = useAuth();
  const [gastos, setGastos] = useState([]);
  const [ultimoGasto, setUltimoGasto] = useState(null);
  const [hayMasPorCargar, setHayMasPorCargar] = useState(false);

  // console.log(gastos)

  const obtenerMasGastos = () => {
    db.collection('gastos')
    .where('uidUsuario', '==', usuario.uid)
    .orderBy('fecha', 'desc')
    .limit(10)
    .startAfter(ultimoGasto)
    .onSnapshot((snapshot) => {
      if(snapshot.docs.length > 0) {
        setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);

        setGastos(gastos.concat(snapshot.docs.map((gasto) => {
          return {...gasto.data(), id: gasto.id}
        })));
      } else {
        setHayMasPorCargar(false);
      }
    });
  }

  useEffect(() => {
   const unsuscribe = db.collection('gastos')
      .where('uidUsuario', '==', usuario.uid)
      .orderBy('fecha', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        if(snapshot.docs.length > 0) {
          setUltimoGasto(snapshot.docs[snapshot.docs.length - 1]);
          setHayMasPorCargar(true);
        } else {
          setHayMasPorCargar(false);
        }

        setGastos(snapshot.docs.map((gasto) => {
          // console.log(gasto.data());
          return {...gasto.data(), id: gasto.id}
        }));
      });

      return unsuscribe;
  }, [usuario]);

  return [gastos, obtenerMasGastos, hayMasPorCargar];
};

export default useObtenerGastos;
