import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
    type: 'list',
    name: 'opcion',
    message: 'qué desea hacer?',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tarea'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        }
    ]
    }
]
const pregunta = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar`
    }
]

const inquirerMenu = async () =>{
    //console.clear();
    console.log('========================='.green)
    console.log(' Seleccióne una opción'.green)
    console.log('=========================\n'.green)

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion ;
}

const pausa = async () =>{
    
   await inquirer.prompt(pregunta);
}

const leerInput = async( message) => {
    const question= [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por Favor ingrese un valor'
                }
                return true;

            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

export{
    inquirerMenu,
    pausa,
    leerInput
}