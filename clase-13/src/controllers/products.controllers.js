import productModel from "../models/product.model.js";

export const getProducts = async (req,res) => {
    try {
        const {limit} = req.query
        const prods = await productModel.find().limit(limit)
        console.log(prods);
        
        res.status(200).render('templates/home', {productos: prods, js: 'productos.js', css: 'productos.css'})
    } catch(e) {
        res.status(500).send("Error al consultar productos: ", e)
    }
}

export const getProduct = async(req,res) => {
    try {
        const idProd = req.params.pid 
        const prod = await productModel.findById(idProd)
        if(prod)
            res.status(200).send(prod)
        else
            res.status(404).send("Producto no existe")        
    }catch(e){
        res.status(500).send("Error al consultar producto: ", e)
    }
}

export const createProduct = async (req,res) => {
    try {
        const product = req.body
        const respuesta = await productModel.create(product)
        console.log(respuesta);
        res.status(201).send("Producto creado correctamente")
    } catch(e) {
        console.log(e);
        
        res.status(500).send("Error al crear producto: ", e)
    }
}

export const updateProduct = async (req,res) => {
    try {
        const idProd = req.params.pid
        const updateProduct = req.body
        const respuesta = await productModel.findByIdAndUpdate(idProd, updateProduct)
        res.status(200).send("Producto actualizado correctamente")
    } catch(e) {
        console.log(e);
        
        res.status(500).send("Error al actualizar producto: ", e)
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const idProd = req.params.pid
        const respuesta = await productModel.findByIdAndDelete(idProd)
        res.status(200).send("Producto eliminado correctamente")
    } catch(e) {
        res.status(500).send("Error al eliminar producto: ", e)
    }
}