// biblioteca en memoria

const MyBiblioteca = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        disponible: true,
    },
    {
        id: 2,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        disponible: true,
    },
    { id: 3, titulo: "1984", autor: "George Orwell", disponible: true },
    {
        id: 4,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        disponible: true,
    },
    {
        id: 5,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        disponible: true,
    },
    {
        id: 6,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        disponible: true,
    },
    { id: 7, titulo: "La Odisea", autor: "Homero", disponible: true },
    {
        id: 8,
        titulo: "Crimen y castigo",
        autor: "Fiódor Dostoyevski",
        disponible: true,
    },
    {
        id: 9,
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        disponible: true,
    },
    {
        id: 10,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        disponible: true,
    },
];

// funcion prestar libro

function prestarLibro(idLibro) {
    for (let libro of MyBiblioteca) {
        if (libro.id === idLibro) {
            if (libro.disponible) {
                libro.disponible = false;
                console.log(`¡Libro "${libro.titulo}" prestado con exito!`);
            } else {
                console.log(
                    `Lo siento, "${libro.titulo}" no se encuentra disponioble`
                );
            }
            return;
        }
    }
    console.log("Libro no encontrado");
}

// funcion mostar lisbros disponibles

function MostrarLibrosDisponibles() {
    console.log("--- Lista de libros disponibles ");
    for (let libro of MyBiblioteca) {
        if (libro.disponible) {
            console.log(
                `+ ID: "${libro.id}" -- Titulo "${libro.titulo}" -- Autor: "${libro.autor}"`
            );
        }
    }
}

//pruebas
MostrarLibrosDisponibles();

prestarLibro(3);
prestarLibro(5);
prestarLibro(7);
prestarLibro(15);

MostrarLibrosDisponibles();
