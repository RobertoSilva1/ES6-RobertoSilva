
import {obtenerLocalidades, obtenerPcias, obtenerDptos,} from './libs/functiones-exportadas.js';


// Funcion para obtener todos los datos
const consultarDatos = async () => {

    try {
        const provincias = await obtenerPcias();
        console.log(provincias);
    } catch (error) {
        console.error( error );
    }

    try {
        const dptos = await obtenerDptos();
        console.log(dptos);
    } catch (error) {
        console.error( error );
    }

    try {
        const localidades = await obtenerLocalidades();
        console.log(localidades);
    } catch (error) {
        console.error( error );
    }
    
}

consultarDatos();