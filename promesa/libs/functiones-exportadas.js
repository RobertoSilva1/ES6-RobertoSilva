
const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const  obtenerPcias = async ( ) => {

    await retrasar(1800);
    try {
        const consulta = await fetch('./databases/provincias.json');
        const provincias = await consulta.json();
        return provincias
    } catch (error) {
       throw Error('Error en la carga de las Provincias') 
    }
}

// Función que retorna los datos de departamentos
const obtenerDptos = async ( ) => {
    await retrasar(1391);

    try {
        const consulta = await fetch('./databases/departamentos.json');
        const departamento = await consulta.json();
        return departamento
    } catch (error) {
        throw Error('Error en la carga de los Departamentos') 
    }
   
}

// Función que retorna los datos de localidades
const obtenerLocalidades = async ( ) => {
    await retrasar(900);

    try {
        const consulta = await fetch('./databases/localidades.json');
        const localidades = await consulta.json();
        return localidades
    } catch (error) {
        throw Error('Error en la carga de las Localidades')  
    }
    
}

export {obtenerLocalidades,obtenerPcias, obtenerDptos}