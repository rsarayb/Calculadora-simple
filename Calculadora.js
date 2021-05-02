let valorPrimero = 0, valorSegundo = 0, valor1 = 0, valor2 = 0, num1 = 0, num2 = 0, resultadoSuma = 0, resultadoFinal, continuidad = "", sumar = false, restar = false, seguirOperando = false;




valor1 = Number(prompt("Ingrese el primer valor"));
operacion = prompt("1(+) 2(-) 3(*) 4(/)")


do {

    
    sumar = ["1", "+"].includes(operacion);
    restar = ["2", "-"].includes(operacion);
    multiplicar = ["3", "*"].includes(operacion);
    dividir = ["/", "4"].includes(operacion);

    valor2 = Number(prompt("Ingrese el segundo valor"));

    if (sumar) {
        suma(valor1,valor2)
    } 
        else if (restar) {
        resta(valor1, valor2)
        } 
            else if (multiplicar) {
            multiplica(valo1,valo2)
            }
                else if (dividir) {
                    divide(valor1,valor2)
                }

    valor1 = resultado;
    operacion = prompt("1(+) 2(-) 3(*) 4(/) o terminar el programa(5)")
    seguirOperando = ["1","2","3","4","+","-","*","/"].includes(operacion);

} while (seguirOperando)

resultadoFinal = document.getElementById('operacion');

let htmlContent = resultado;

resultadoFinal.innerHTML = htmlContent;




function suma(num1, num2){
    resultado = num1 + num2;
    return resultado;
}

function resta(num1, num2) {
    resultado = num1 - num2;
    return resultado;
}

function multiplica(num1, num2) {
    resultado = num1 * num2;
    return resultado;
}

function divide(num1,num2) {
    resultado = num1 / num2;
    return resultado;
}