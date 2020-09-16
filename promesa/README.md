1. Transformar todas las funciones en funciones flecha.
1. Transformar las funciones en asíncronas con la palabra async.
1. Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.
1. Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.
1. Implementar await sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.
1. Selecconar las funciones retrasar, obtenerPcias, obtenerDptos, obtenerLocalidades, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta libs.
1. Utilizar la palabra reservada export para exportar las funciones y que puedan ser utilizadas desde el archivo app.js. Pueden exportarlas una por una o como un solo objeto.
1. Implementar bloques try catch para el manejo de errores.
const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
function obtenerPcias() {
    await retrasar(1800);

    const consulta = fetch('');
}

// Función que retorna los datos de departamentos
function obtenerDptos() {
    await retrasar(1391);

    const consulta = fetch('');
}

// Función que retorna los datos de localidades
function obtenerLocalidades() {
    await retrasar(900);

    const consulta = fetch('');
}




// Funcion para obtener todos los datos
function consultarDatos() {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();