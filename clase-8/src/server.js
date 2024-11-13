import express from 'express'
import { __dirname } from './path.js'
import productRouter from './routes/productos.routes.js'
import multerRouter from './routes/imagenes.routes.js'

const app = express()
const PORT = 8080

//Middlewares de aplicacion
app.use(express.json()) //Para manejar JSON en las peticiones
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static(__dirname + '/public'))//Defino la carpeta publica como destino de los archivos estaticos

app.use('/api/productos', productRouter)
app.use('/upload', multerRouter)

app.listen(PORT, () => {
    console.log("Server on port", PORT)
})
