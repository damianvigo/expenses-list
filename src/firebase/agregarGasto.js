import { db } from './firebaseConfig';

const agregarGasto = ({ categoria, fecha, descripcion, cantidad, uidUsuario}) => {
  db.collection('gastos').add({
    categoria,
    fecha,
    descripcion,
    cantidad,
    uidUsuario
  });
}

export default agregarGasto;