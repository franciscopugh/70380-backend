/**
 * ECMA 7
let resultadoPotencia = Math.pow(5,3)
let resPotencia = 5**3
console.log(resPotencia);
console.log(resultadoPotencia);

let numeros = [5,10,3,2]

console.log(numeros.includes(6));


ECMA 8

{nombre: ["Francisco"], apellido: ["Pugh"]}

const empleados = [
    {nombre: "Francisco", apellido: "Pugh", sueldo: 1200},
    {nombre: "Pepe", apellido: "Perez", sueldo: 1400},
    {nombre: "Malena", apellido: "Martinez", sueldo: 2200},
    {nombre: "Emilia", apellido: "Esmeralda", sueldo: 3100},
]

console.log(Object.keys(empleados[0])); //nombre de propiedad
console.log(Object.values(empleados[0])); //valor de propiedad
console.log(Object.entries(empleados[0])); //nombre y valor de objeto


ECMA 9


let obj1 = {}
let obj2 = {...obj1} //SPREAD 
//structuredClone(obj1)

const sumar = (...numeros) => { //... REST
    console.log(numeros);
    return numeros.reduce((num1, num2) => num1 + num2, 0)
}

//num1 (anterior) - num2(actual) => num1 + num2 , valInicial = 0
//[4,5,1,10,1]
//0+4 (1)
//4+5 = 9 (2)
//9+1 = 10 (3)
//10 + 10 = 20 (4)
 
console.log(sumar(4,5,1,10))

ECMA 10


const ciudad = " Trelew "
ciudad = "Trelew"
console.log(ciudad.trimEnd().length); //Eliminar espacios en blanco por derecha
console.log(ciudad.trimStart().length);//Eliminar espacios en blanco por izquierda
console.log(ciudad.trim().length);

const facturas = [400, 500, 800, 1200, 2000,[400, [100, [200]]], [100,200]]

console.log(50 + [10]);

const sumarFacturas = (facturas) => facturas.reduce((num1, num2) => num1 + num2, 0)


console.log(sumarFacturas(facturas.flat(10)));

ECMA 11

const facturas = [400, 500, 800, 1200, 2000,null, 100, 200, 100,200]

const sumarFacturas = (facturas) => facturas.reduce((num1, num2) => num1 + num2, 0)

console.log(sumarFacturas(facturas));

const user = {sueldo: undefined, nombre: "Francisco"}

const sumar = user.sueldo ?? 0

console.log(sumar);

const carrito = localStorage.getItem('carrito') ?? [] //si es undefined o null, devolve lo de la derecha
console.log(carrito);

*/

const empleados = [
    {nombre: "Pedro", edad: 25, area: "Sistemas"},
    {nombre: "Miguel", edad: 25, area: "RRHH"},
    {nombre: "Lucia", edad: 32, area: "Sistemas"},
    {nombre: "Julieta", edad: 19, area: "Administracion"}
]

console.log(Object.groupBy(empleados, ({ area }) => area));
