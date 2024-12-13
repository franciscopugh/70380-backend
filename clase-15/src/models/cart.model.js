import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    products: {
        type: [
            {
                id_prod: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'products' //Significa que este id hace referencia a un id de un objeto de la coleccion products
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: []
    }
})

//Cada vez que ejecuto findOne, voy a manejarme via populate
cartSchema.pre('findOne', function() {
    this.populate('products.id_prod')
} )

const cartModel = model("carts", cartSchema)

export default cartModel