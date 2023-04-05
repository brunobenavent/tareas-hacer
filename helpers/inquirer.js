import inquirer from 'inquirer';
import colors from 'colors';

const preguntas = [
    {
    type: 'list',
    name: 'opcion',
    message: 'qué desea hacer?',
    choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () =>{
    console.clear();
    console.log('========================='.green)
    console.log(' Seleccióne una opción'.green)
    console.log('=========================\n'.green)

    const opt = await inquirer.prompt(preguntas)
    return opt;
}

export{
    inquirerMenu
}