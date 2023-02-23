import express from 'express'
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('AQUI SE DEBERIAN MOSTRAR TODOS LOS USUARIOS');
});

export default router