import colors from 'colors';
import { inquirerMenu, leerInput, pausa } from './helpers/inquirer.js';

import Tareas from './helpers/models/tareas.js';
 
console.clear()

const main = async() =>{
    
    let opt= ''
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':

            //crear opcion
            const desc = await leerInput('Descripción: ')
            console.log(desc)
                
            break;
            case '2':
                console.log(tareas._listado)
            break;
            case '3':
        
                break;
            case '4':
        
                break;
            case '5':
        
                break;
            case '6':
        
                break;

        }       

        await pausa();
        
    } while (opt!=='0');



 
}
main();
