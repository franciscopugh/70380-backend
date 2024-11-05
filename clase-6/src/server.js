/*import http from 'http'

const PORT = 3000

const server = http.createServer((req, res) => {
    res.end("Hola mi servidor local!")
})

server.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}`)
})*/

import express from 'express'

const app = express()
const PORT = 8080

//Middlewares
app.use(express.urlencoded({extended:true})) //Permite manejar queries mas complejas

const personas = [
    {
        id: 1,
        nombre: "Pepe",
        apellido: "Pere",
        edad: 30
    }, 
    {
        id: 2,
        nombre: "Marina",
        apellido: "Martinez",
        edad: 20
    },
    {
        id: 3,
        nombre: "Luciano",
        apellido: "Lopez",
        edad: 20
    },
]

//req -> request (cuando NECESITO info del cliente)
//res -> response (la info que yo envio al cliente)
app.get('/saludo', (req,res) => {
    res.send('Hola desde server en express')
})

app.get('/personas', (req,res) => {
    const {edad} = req.query
    console.log(edad)
    let resultado = personas.filter(persona => persona.edad == parseInt(edad))
    res.send(resultado)
})

app.get('/personas/:idPersona', (req,res) => { //: indican que va a ser dinamico
    const idPersona = req.params.idPersona
    const persona = personas.find(persona => persona.id == parseInt(idPersona))
    res.send(persona)
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})