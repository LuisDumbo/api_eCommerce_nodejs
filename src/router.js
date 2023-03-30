import 'express-router-group'
import { Router } from "express"
import UserController from "./App/Controllers/UserController";
import SessionController from "./App/Controllers/SessionController";
import Middlewareauth from './App/middlewares/auth';
import ItemController from './App/Controllers/ItemController';
import CarController from './App/Controllers/CarController';
import erro404 from './App/middlewares/404'

const route = new Router();

route.post('/user', UserController.store)
route.post('/login', SessionController.stor)

route.group('/stor', Middlewareauth, route => {
    route.get('/list_itens', ItemController.index)
    route.post('/add_on_cart', ItemController.add_carts)
    route.delete('/remove_from_cart/:itemCart_id', ItemController.removeFromCart)
    route.get('/cart_list/:carts_id', CarController.index)
    route.delete('/pay/:carts_id', CarController.pay)   
    route.get('/items_in_the_car/:carts_id', CarController.count_items_in_the_car)
})

route.use(erro404)

export default route;