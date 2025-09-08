function filtrarNumeros(numeros) {
    let pares = [];
    for (let num of numeros) {
        if (num % 2 === 0) {
            pares.push(num);
        }
    }
    return pares;
}

let numerosAfiltrar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrarNumeros(numerosAfiltrar));

let numerosFiltrados = filtrarNumeros(numerosAfiltrar);

numerosFiltrados.forEach((element) => {
    console.log(element);
});
