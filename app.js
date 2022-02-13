const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(err => console.log(err));