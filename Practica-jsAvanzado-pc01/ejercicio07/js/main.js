/*
2. Gestor de Estudiantes
Arreglo de objetos estudiantes con propiedades: id, nombre, nota.
Funciones:
•	agregarEstudiante(nombre, nota).
•	promedioGeneral() → Calcula y devuelve el promedio de notas.
•	mejorEstudiante() → Muestra el estudiante con mayor nota.
•	mostrarAprobados() → Filtra y muestra solo los que tengan nota >= 11.

*/

// Gestion de estudiantes

let myEscuela = [];

//funcion para nuevos id

function nextId() {
    return myEscuela.length ? Math.max(...myEscuela.map((a) => a.id)) + 1 : 1;
}

//funcion para agregar alumno

function agregarEstudiante(nombre, nota) {
    if (typeof nombre !== "string" || !nombre.trim()) {
        throw new console.error("nombre no habilitado");
    }
    if (typeof nota !== "number" || nota < 0 || nota > 20) {
        throw new console.error("La nota debe de estar en rango de 0 a 20");
    }

    const nuevo = { id: nextId(), nombre: nombre.trim(), nota };
    myEscuela.push(nuevo);
    return nuevo;

    /*let nuevoAlumno = {
        id: nextId(),
        nombre: nombre,
        nota: nota,
    };

    return myEscuela.push(nuevoAlumno);*/
}

// Promedio de los alumnos

function promedioGeneral() {
    if (myEscuela.length === 0) return 0;
    let suma = myEscuela.reduce((acum, alumno) => acum + alumno.nota, 0);

    return Number((suma / myEscuela.length).toFixed(2));
}

//mejor estudiante
function mejoresEstudiante() {
    if (myEscuela.length === 0) return [];

    console.log(myEscuela.length);
    let notaMaxima = Math.max(...myEscuela.map((alumno) => alumno.nota));

    return myEscuela.filter((a) => a.nota === notaMaxima);
}

//Aprovados
function mostrarAprobados() {
    return myEscuela.filter((alumnos) => alumnos.nota > 11);
}

agregarEstudiante("jose", 20);
agregarEstudiante("carlos", 20);
agregarEstudiante("pepe", 10);

console.log("Promedio general:", promedioGeneral());
mejoresEstudiante();
console.log("Mejor(es) estudiante(s):");
console.table(mejoresEstudiante());

console.log("Aprobados:");
console.table(mostrarAprobados());
