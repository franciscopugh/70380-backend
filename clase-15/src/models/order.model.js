import {Schema, model} from 'mongoose'

const orderSchema = new Schema({
    name: String,
    size: {
        type:String, 
        enum: ["small", "medium", "large"], //Tipos de datos enumerados
        default: "medium"
    },
    price: Number, 
    quantity: Number,
    date: Date
})

const orderModel = model("orders", orderSchema)

export default orderModel