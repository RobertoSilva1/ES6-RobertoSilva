
const saludar = nombre =>'Hola ' + nombre;


// Mostrar el resultado por consola
console.log(saludar('Alejandro'));




const multiplicar = (a, b) => a + b;

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))




const crearAlumno = (nombre, apellido, edad, materias) => ({nombre, apellido, edad, materias})

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))





const  devolverFecha = (...arguments) =>`Hoy es ${arguments[0]}-${arguments[1]}-${arguments[2]}`

// Mostrar el resultado por consola.
console.log(devolverFecha('10','09','2020'));
