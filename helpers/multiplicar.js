const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ({ base = 5, listar, hasta }) => {
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        if (listar) {
            console.log(salida.green);
        }

        return `tabla-${base}.txt`
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}