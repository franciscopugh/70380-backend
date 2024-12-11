import { Router } from "express";
import { getCart, createCart, insertProductCart } from "../controllers/carts.controllers.js";

const cartRouter = Router()

cartRouter.get('/:cid', getCart) //Consultar los productos guardados en un carritp

cartRouter.post('/', createCart) //Crear un nuevo carrito

cartRouter.post('/:cid/products/:pid', insertProductCart) //Agregar nuevo producto al carrito

export default cartRouter