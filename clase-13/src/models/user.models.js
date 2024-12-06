import {Schema, model} from 'mongoose'

const userSchema = new Schema( {
    username: String, //Agrego una caracteristica, esta es el tipo
    email: {
        type: String, 
        unique: true
    }
})
                            //Nombre de la coleccion / esquema a utilizar
export const userModel = model("users", userSchema)