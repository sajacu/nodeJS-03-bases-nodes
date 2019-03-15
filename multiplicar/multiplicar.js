const fs = require('fs'); // require para usar modulo nodejs: filesystem(libreria existente en nodejs)
// const fs = require('express'); // require para usar paquete(extenciones de otras personas) que se instala (no existente en nodejs)
// const fs = require('./fs'); // require para archivos creados por nosotros dentro del proyecto
//o module.exports.crearArchivo = async(base) => { // para agregarlo a los modulos globales de la aplicacion
const colors = require('colors');

let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`La base ingresada: ${base} no es un número`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite ingresado: ${limite} no es un número`);
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        // console.log(`${base} * ${i} = ${base*i}`);
        data += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFileSync(`tablas/tabla-${base}-l${limite}.txt`, data);

    // console.log(`El archivo Tabla-${base}.txt ha sido creado!`);
    return `tabla-${base}-l${limite}.txt`.blue;
};

let listarTabla = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`La base ingresada: ${base} no es un número`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite ingresado: ${limite} no es un número`);
    }

    console.log('========================'.green);
    console.log(`======= TABLA ${base} =======`.green);
    console.log('========================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

module.exports = {
    crearArchivo, // crearArchivo: crearArchivo
    listarTabla
}