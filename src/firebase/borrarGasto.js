import { db } from './firebaseConfig';

const borrarGasto = (id) => {
    db.collection('gastos').doc(id).delete();
}

export default borrarGasto;