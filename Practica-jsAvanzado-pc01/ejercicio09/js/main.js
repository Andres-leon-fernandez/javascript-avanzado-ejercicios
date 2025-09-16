/*
4. Gestión de Tareas (To-Do List)
Arreglo de tareas con id, descripcion, completada.
Funciones:
•	agregarTarea(descripcion) → Agrega con estado inicial false.
•	completarTarea(id) → Cambia su estado a true.
•	mostrarPendientes() → Lista solo tareas que aún no se completan.
•	eliminarTarea(id) → Elimina una tarea según su ID.
*/

let tarreas = [];

function calcularSiguienteID() {
    return tarreas.length ? Math.max(...tarreas.map((p) => p.id)) + 1 : 1;
}

function agregarTarea() {
    let descripcionDesdeConsola = prompt("Ingrese descripcion de la tarea");

    let newTarrea = {
        id: calcularSiguienteID(),
        descipcion: descripcionDesdeConsola,
        estado: false,
    };

    tarreas.push(newTarrea);

    console.log(`La tarrea fue agregada con exito
        ID ${newTarrea.id} || Descripcion ${newTarrea.descipcion}  || Estado ${newTarrea.estado}`);
}

function completarTarea() {
    let idTarreaCompletada = prompt("Ingrese el id de la tarrea completada");
    tarreas.forEach((tarrea) => {
        if (tarrea.id === idTarreaCompletada) {
            console.log("id encontrada");
        }
    });
}

function mostarTarreas() {
    return tarreas;
}
function mostarTarreasCompletadas() {
    return tarreas.filter((tarreas) => !tarreas.estado);
}
function mostarTarreasPorCompletar() {}

agregarTarea();
agregarTarea();
console.table(tarreas);
console.log(mostarTarreas());
