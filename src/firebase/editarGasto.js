import { db } from './firebaseConfig';

const editarGasto = ({id, categoria, fecha, descripcion, cantidad }) => {
  return db.collection('gastos').doc(id).update({
    categoria,
    fecha,
    descripcion,
    cantidad: Number(cantidad)
  });
};

export default editarGasto;
