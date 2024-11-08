import express from 'express'
import crypto from 'crypto'

const app = express()
const PORT = 8080

app.use(express.json()) //Para manejar JSON en las peticiones
app.use(express.urlencoded({extended: true}))

const productos = []

// Consultar productos
app.get('/api/productos', (req,res) => {
    res.status(200).send(productos)
})

// Consultar producto via ID
app.get('/api/productos/:idP', (req,res) => {
    const idProducto = req.params.idP
    const producto = productos.find(prod => prod.id == idProducto)

    if(producto) {
        res.status(200).send(producto)
    } else {
        res.status(404).send({mensaje: "El producto no existe"})
    }
})

//Crear un nuevo producto
app.post('/api/productos', (req,res) => {
   const {nombre, marca, precio, stock} = req.body
   const nuevoProducto = {
        id: crypto.randomBytes(10).toString('hex'), //Me genera un id unico
        nombre: nombre,
        marca: marca,
        precio: precio,
        stock: stock
   }
   productos.push(nuevoProducto)
   res.status(201).send({mensaje: `Producto creado correctamente con el id: ${nuevoProducto.id}`})
})

//Actualiza un producto dado su id y pido los datos a actualizar del cuerpo de la peticion
app.put('/api/productos/:idP', (req,res) => {
    const idProducto = req.params.idP
    const {nombre, marca, precio, stock} = req.body
    const indice = productos.findIndex(prod => prod.id == idProducto)
    console.log(indice);
    
    if(indice != -1) {
        productos[indice].nombre = nombre
        productos[indice].marca = marca
        productos[indice].precio = precio
        productos[indice].stock = stock
        
        res.status(200).send({mensaje: "Producto actualizado"})
    } else {
        res.status(404).send({mensaje: "El producto no existe"})
    }
})

//Elimina un producto dado su id
app.delete('/api/productos/:idP', (req,res) => {
    const idProducto = req.params.idP
    const indice = productos.findIndex(prod => prod.id == idProducto)
    if(indice != -1) {
        productos.splice(indice, 1)
        res.status(200).send({mensaje: 'Producto eliminado'})
    } else {
        res.status(404).send({mensaje: "El producto no existe"})
    }
})

app.listen(PORT, () => {
    console.log("Server on port", PORT)
})
