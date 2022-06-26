// Kata 1 - Função para achar um número somado por outro:
function add(value1, value2) {
    return (value1 + value2)
}

// Descomente a linha seguinte para testar sua função:
// console.log(add(3,5))
// console.assert(add(3, 5) == 8, 'A função add não está funcionando como esperado')




// Kata 2 - Função para achar um número multiplicado por outro (Sem a utilização de operadores aritméticos):
function multiply(value1, value2) {
    let count = 0
    for (let i = 0; i < value1; i++) {
        count = add(count, add(0, value2))
    }
    return count
}
// Descomente a linha seguinte para testar sua função:
// console.log(multiply(4,6))
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');




// Kata 3 - Função para achar um número elevado ao seu expoente correspondente (Sem a utilização de operadores aritméticos):
function power(value1, value2) {
    let count = 0
    if (multiply(value1, value2) == value1) {
        return value1
    }
    for (let i = 0; i < value2 - 1; i++) {
        if (i <= 0) {
            count = add(count, multiply(value1, value1))
        } else {
            count = multiply(count, value1)
        }
    }
    return count
}
// Descomente a linha seguinte para testar sua função:
// console.log(power(3, 4))
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');





// Kata 4 - Função para achar um número Fatorial correspondente (Sem a utilização de operadores aritméticos):
function fatorial(value) {
    let count = value
    for (i = 1; i < value; i++) {
        count = multiply(count, i)
    }
    return count = power(count, 1)
}
// Descomente a linha seguinte para testar sua função:
// console.log(fatorial(5))
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');




// Kata 5 -  Função para achar um número Fibonacci correspondente (Sem a utilização de operadores aritméticos):
function fibonacci(value) {
    let somarValor = 0   
    let resultado = 1   
    for (i = 2; i <= value; i++) { 
        let aux = somarValor  
        somarValor = resultado 
        resultado = add(resultado, aux)   
    }
    return resultado
}
// Descomente a linha seguinte para testar sua função:
// console.log(fibonacci(7))
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');