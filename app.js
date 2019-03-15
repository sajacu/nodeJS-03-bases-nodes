const { yargv } = require('./config/yargs');
// o const yargv = require('./config/yargs').yargv;
const colors = require('colors');
//o const colors = require('colors/safe'); para usar colors.green('fsdg')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // opc 1
/*const argv = require('yargs')
    .command('listar', 'Imprime tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;*/

// const multiplicar = require('./multiplicar/multiplicar'); // opc 2
// console.log(multiplicar);
// console.log(module);
// console.log(process.argv);
//console.log(`Comandos: Base = ${yargv.base}, Limite = ${yargv.limite}`);

let main = async() => {
    try {
        console.log(yargv);
        let command = yargv._[0];
        switch (command) {
            case 'listar':
                await listarTabla(yargv.base, yargv.l);
                break;

            case 'crear':
                filename = await crearArchivo(yargv.base, yargv.limite);
                console.log(colors.green(
                    `El archivo ${filename} con limite ${yargv.limite} ha sido creado!`));
                break;

            case 'borrar':
                console.log('borrar');
                break;

            default:
                console.log('Comando no reconocido.');
        };


        /*let argv = process.argv;

        let param = argv[2]; //argv[2]: --base=5
        let base = param.split('=')[1];
        console.log(`Base: ${base}`);

        let filename = await crearArchivo(base);

        console.log(`El archivo ${filename}.txt ha sido creado!`);*/

    } catch (e) {
        console.log(e);
        return -1;
    }
    return 0;
};

main().then(retcode => {
    console.log(`Main finished with retcode: ${retcode}`);
}).catch(e => {
    console.log(`Main error: ${e}`);
});