let options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const yargv = require('yargs')
    .command('listar', 'Imprime tablas de multiplicar', options)
    .command('crear', 'Crear tablas de multiplicar', options)
    .help()
    .argv;

module.exports = {
    yargv
}