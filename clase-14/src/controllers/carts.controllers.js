import cartModel from "../models/cart.model.js";

export const getCart = async (req,res)=> {
    try {
        const cartId = req.params.cid                          //Atributo - id Referencia
        const cart = await cartModel.findOne({_id: cartId}) //findOne({nombre_atributo: valor}) -> findOne({_id: cartId})
        res.status(200).send(cart)
    }catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
}

export const createCart = async (req,res)=> {
    try {
        const respuesta = await cartModel.create({products: []})
        res.status(201).send(respuesta)
    }catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
}

export const insertProductCart = async (req,res)=> {
    try {
        const cartId = req.params.cid 
        const productId = req.params.pid 
        const {quantity} = req.body
        const cart = await cartModel.findById(cartId) //Como agrego un nuevo producto, no es necesario traer todo via populate

        if(cart) {
            //Consulto si el producto existe o no en el carrito
            const indice = cart.products.findIndex(prod => prod.id_prod == productId)

            if(indice != -1) { //Producto existe
                cart.products[indice].quantity = quantity //Actualizo cantidad
            } else {
                cart.products.push({id_prod : productId, quantity: quantity}) //Creo el producto
            }
            const mensaje = await cartModel.findByIdAndUpdate(cartId, cart) //Guardando los cambios
            return res.status(200).send(mensaje)
        } else {
            res.status(404).send("Carrito no existe")
        }
        

    }catch (e) {
        console.log(e);
        res.status(500).send(e)
    }
}
