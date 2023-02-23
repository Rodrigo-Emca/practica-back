import express, { Router } from 'express'
import Book from '../models/Book.js'
let router = express.Router()

router.get(
    '/',
    (req,res) => {
        return res
        .status(200)
        .send('Acá deberias ver todos los libros')
    }
)

router.post(
    '/',
    async (req, res) =>{
        try {
            let book= Book.create(req.body)
            return res.status(201).send('Se creó correctamente')
    } catch{
        console.log(error)
        return res.status.apply(400).send('No se ha podido crear.')
    }
})

export default router