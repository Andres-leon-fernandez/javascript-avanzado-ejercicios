function CalculadoraEstadistica(numeros) {
    const suma = numeros.reduce((total, num) => total + num, 0);
    const promedio = suma / numeros.length;
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    return { suma, promedio, maximo, minimo };
}

const edades = [25, 30, 18, 42, 15, 99];

const estadisticas = CalculadoraEstadistica(edades);

console.log(estadisticas);
