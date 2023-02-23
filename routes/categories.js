import express from 'express'
import Category from '../models/Category.js'
let router = express.Router()

router.get(
    '/', //endpoint a concatenar con el endpoint del enrrutador principal.
    (req,res) => { //la funcion que se va a ejecutar cada vez que se llame al endpoint.
        //console.log(req)
        return res
            .status(200) //200: codigo de exito para la lectura
            .send('Aca deberias ver todas las categorias') //send envia mensajes al cliente.
    }) 

router.post(
    '/', 
    async (req,res) =>{
        try {
            let category =Category.create(req.body)
            //return res.status(201).send('se creó correctamente la categoria') //Esto se usa para enviar un mensaje al usuario, como respuesta.
            return res.status(201).json({
                success: true,
                message: 'se creó correctamente'
            })
        } catch{
            console.log(error)
            //return res.status.apply(400).send('no se pudo crear')
            return res.status(201).json({
                success: false,
                message: 'No se creó correctamente'
        })
}
})

export default router