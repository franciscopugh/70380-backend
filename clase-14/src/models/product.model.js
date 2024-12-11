import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true //Si o si mi usuario va a tener que ingresarlo (atributo requerido)
    },
    description: {
        type: String,
        required: true 
    },
    category: {
        type: String,
        required: true,
        index: true
    },
    status: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        required: true 
    },
    stock: {
        type: Number,
        required: true 
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        default: []
    }
})

const productModel = model("products", productSchema)

export default productModel