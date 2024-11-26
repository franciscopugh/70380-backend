import express from 'express'
import { create } from 'express-handlebars'
import { Server } from 'socket.io'
import path from 'path'
import { __dirname } from './path.js'
import productRouter from './routes/productos.routes.js'
import cartRouter from './routes/carritos.routes.js'
import multerRouter from './routes/imagenes.routes.js'

const app = express()
const hbs = create()
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log("Server on port", PORT)
})

//Inicializo Socket.io en el servidor
const io = new Server(server)
//Middlewares de aplicacion
app.use(express.json()) //Para manejar JSON en las peticiones
app.use(express.urlencoded({extended: true}))
//Configuracion de hbs para localizacion de plantillas y extension de archivo
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//Establezco el directorio de las vistas

app.use('/static', express.static(__dirname + '/public'))//Defino la carpeta publica como destino de los archivos estaticos
app.set('views', path.join(__dirname, 'views'))
console.log(__dirname);

//app.set('views',__dirname + '/src/views')

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/upload', multerRouter)
const productos = [
    {nombre: "Chocolate", marca: "Chocolatin", precio: 2450, stock: 12, status: true},
    {nombre: "Hamburguesa", marca: "Hamburguesin", precio: 2230, stock: 22, status: true},
    {nombre: "Arroz", marca: "Arrocin", precio: 1330, stock: 42, status: false}
]
//res.render('nombre-plantilla', {objetos a enviar})
app.get('/', (req,res) => {
    res.render('productos', {productos})
})

//Conexiones de socket.io
//socket = info que llega de la conexion
io.on('connection', (socket) => { //Cuando se producza el "apreton de manos", puedo ejecutar las sigueintes funciones
    console.log('Usuario conectado: ', socket.id); //ID de conexion
    
    socket.on('mensaje', (data) => { //Cuando el usuario me envia un mensaje, trabajo con esos datos
        console.log('Mensaje recibido: ', data);
        //Enviar un mensaje
        socket.emit('respuesta', 'Mensaje recibido correctgiamente: ', data)
    })

    //Detectar desconexion
    socket.on('disconnect', ()=> {
        console.log('Usuario desconectado: ', socket.id);
        
    })
})

