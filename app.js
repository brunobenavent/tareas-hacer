import colors from 'colors';
import { inquirerMenu, leerInput, pausa, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js';

import Tareas from './models/tareas.js';
import { guardarDB, leerDb } from './helpers/guardarArchivo.js';
 
console.clear()

const main = async() =>{
    
    let opt= ''
    const tareas = new Tareas();
    const tareasDb = leerDb()

    if(tareasDb){
        tareas.cargarTareasFromArray(tareasDb)
    }

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':

            //crear opcion
            const desc = await leerInput('Descripción: ')
            tareas.crearTarea(desc);
                
            break;
            case '2':
                tareas.listadoCompleto()
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                 const ids = await mostrarListadoChecklist(tareas.listadoArr)
                 tareas.toggleCompletadas(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if(!id==='0'){
                    const ok = await confirmar('¿está seguro?')
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('tarea borrada correctamente')
                    }
                
                }
                break;

        }       
        guardarDB(tareas.listadoArr)

        await pausa();
        
    } while (opt!=='0');



 
}
main();
