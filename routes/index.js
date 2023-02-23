import userRouter from './users.js'
import categoriesRouter from './categories.js'
import booksRouter from './books.js'

import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//En el enrutador principal, voy a enrutar todos los recursos.
//Voy a llamar y configurar las rutas de usuarios, categorias, libros, etc.
//A través del metodo .use, le indico al enrutador principal que utilice esas rutas con esa palabra (Endpoint)

//El primer parámetro será el endpoint que quiero controlar, y el segundo es la ruta del recurso que quiero contrarolar con el endpoint.
router.use('/users', userRouter)

router.use('/categories', categoriesRouter)

router.use('/books', booksRouter)

export default router