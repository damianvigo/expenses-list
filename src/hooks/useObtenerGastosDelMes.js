import { useState, useEffect } from 'react';
import { db } from './../firebase/firebaseConfig';
import { startOfMonth, endOfMonth, getUnixTime } from 'date-fns';
import { useAuth } from './../contextos/AuthContext';

const useObtenerGastosDelMes = () => {
  const [gastos, setGastos] = useState([]);
  const { usuario } = useAuth()

  useEffect(() => {
    const inicioDeMes = getUnixTime(startOfMonth(new Date()));
    const finDeMes = getUnixTime(endOfMonth(new Date()));

    if(usuario) {
        const unsuscribe = db.collection('gastos')
        .orderBy('fecha', 'desc')
        .where('fecha', '>=', inicioDeMes)
        .where('fecha', '<=', finDeMes)
        .where('uidUsuario', '==', usuario.uid)
        .onSnapshot((snapshot) => {
         
          setGastos(snapshot.docs.map((documento) => {
           return {...documento.data(), id: documento.id }
          }));
        });

        return unsuscribe;
    }

  }, [usuario]);

  return [gastos];
};

export default useObtenerGastosDelMes;
