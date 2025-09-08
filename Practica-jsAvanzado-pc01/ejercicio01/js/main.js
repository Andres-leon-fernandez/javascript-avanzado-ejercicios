let persona = {
    nombre: "jose",
    edad: 28,
    ciudad: "Lima",

    saludarNombreEdad: function () {
        console.log(
            `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`
        );
    },
};

persona.saludarNombreEdad();

let arrayObject = Object.values(persona);

arrayObject.forEach((x) => {
    console.log(x);
});

persona.profecion = "Doctor";
persona.decirProfecion = function () {
    console.log(`Mi profecion es la de un ${this.profecion}`);
};

persona.decirProfecion();

let arrayObject2 = Object.values(persona);

arrayObject2.forEach((x) => {
    console.log(x);
});
