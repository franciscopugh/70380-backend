/*let nombre = "Pepe" 
nombre = "Ramona"
var apellido = "Perez"
var apellido = "Ramirez"
console.log(nombre);
console.log(apellido)
const IVA = 1.21
IVA = 1.30

const IVA = 1.21

function sumar(numero1, numero2) {
    IVA = 1.22
    console.log("Estoy dentro de sumar", IVA)
    return numero1 + numero2
    
}

const sumar2 = (numero1, numero2) => numero1 + numero2

console.log(sumar(5,10));
console.log(sumar2(5,10));

console.log("Estoy fuera de sumar", IVA)
*/

class Auto {
    constructor(color, marca, modelo, cantPuertas) {
        this.color = color,
        this.marca = marca,
        this.modelo  = modelo,
        this.cantPuertas = cantPuertas
    }

    //Metodo
    moverse(velocidad) {
        console.log("Me estoy moviendo a", velocidad, "km/h")
    }
}

const auto1 = new Auto("Negro", null,"Etios", null)

auto1.color = "Amarillo"
console.log(auto1.color);

auto1.moverse(120)
