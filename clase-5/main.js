/*import fs from 'fs'

const RUTA = './ejemplo.txt'


//SINCRONICA

if(fs.existsSync(RUTA)) { //Consultar si existe o no un file en esa ruta (similar a SOME)
    //Modificacion del txt

    fs.appendFileSync(RUTA, ` 
    Hola.\n
    Buenas.\n
    Tardes.\n
    `)

    let contenido = fs.readFileSync(RUTA, 'utf-8') //Leer el contenido
    console.log(contenido);

    //fs.unlinkSync(RUTA) //Elimino el archivo
    
} else {
    fs.writeFileSync(RUTA, "") //Crear archivo vacio
}


//Callbacks

fs.writeFile(RUTA, "", (error) => {
    if(error) 
        return "Error al escribir archivo"
    fs.appendFile(RUTA, "Buenas tardes. \n", (error) => {
        if(error)
            return "Error al modificar archivo"
        fs.readFile(RUTA, 'utf-8', (error) => {
            if(error) 
                return "Error al leer archivo"
            fs.unlink(RUTA, (error) => {
                if(error) 
                    return "Error al eliminar archivo"
                return "Camino completado"
            })
        })
    })
})

import {promises as fs} from 'fs' //ALIAS

const RUTA = './ejemplo.txt'

const operarTXT = async (ruta) => {
    await fs.writeFile(ruta, "")

    await fs.appendFile(ruta, "Hola, buenos dias.\n")

    let contenido = await fs.readFile(ruta, 'utf-8')

    console.log(contenido)
    
    await fs.unlink(ruta)

}

operarTXT(RUTA)*/

import {promises as fs} from 'fs' //ALIAS
import crypto from 'crypto'
const RUTA = './productos.json'

const guardarProducto = async (nombre, marca, precio, stock) => {
    const producto = {
        id: crypto.randomBytes(10).toString("hex"),
        nombre: nombre, 
        marca: marca,
        precio: precio,
        stock: stock
    }    

    let productos = JSON.parse(await fs.readFile(RUTA, 'utf-8'))

    const indice = productos.findIndex((prod) => prod.id == producto.id)
    
    if(indice != -1) {
        productos[indice].stock += producto.stock
    } else {
        productos.push(producto)
    }

    await fs.writeFile(RUTA, JSON.stringify(productos))
}

guardarProducto("Yerba Mate", "La yerbera", 5000, 10)


