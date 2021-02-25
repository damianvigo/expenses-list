import { useEffect, useState } from 'react';
import { db } from './../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';

const useObtenerGasto = (id) => {
  const history = useHistory();
    const [gasto, setGasto] = useState('');
  
    useEffect(() => {
      db.collection('gastos').doc(id).get()
      .then((doc) => {
        if(doc.exists) {
          setGasto(doc);
        } else {
          history.push('/lista');
        }
      })
    }, [history, id]);

  return [gasto];
}

export default useObtenerGasto;