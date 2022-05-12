function somaNumeros(arr) {
    const soma = arr.reduce((prev, current) => prev + current);
    return soma;
}

const arr = [1, 2];

console.log(somaNumeros(arr));