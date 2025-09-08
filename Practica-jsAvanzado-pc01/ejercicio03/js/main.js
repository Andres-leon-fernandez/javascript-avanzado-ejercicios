let MatrizAConvertir = [
    ["Jose", 15, "Masculino"],
    ["Fernanda", 21, "Femenino"],
    ["Nina", 4, "Femenino"],
];

let objeto = MatrizAConvertir.map((persona) => ({
    nombre: persona[0],
    edad: persona[1],
    sexo: persona[2],
}));

objeto.forEach((x) => {
    let o2 = Object.values(x);
    o2.forEach((y) => {
        console.log(y);
    });
    console.log("     ");
});
