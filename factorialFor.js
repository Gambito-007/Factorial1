function factorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso:
console.log(factorial(5)); // Imprime 120
console.log(factorial(10)); // Imprime 120