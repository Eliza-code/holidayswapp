const server = require('express').Router();
const { Points } = require('../db');

//Ruta para crear puntos
server.post('/', (req, res, next) => {
    if(!req.body.name || !req.body.price || !req.body.stock || !req.body.img) { 
        res.status(400).send('Cuidado! no se permiten campos indefinidos')
    } else { 
        Points.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            img: req.body.img
        })
        .then((point) => {
            res.status(201).send("Puntos creados con éxito")
        })
        .catch(next);
    }
});

//Ruta que me trae todos los productos existentes
server.get('/points', (req, res, next) => {
    Points.findAll()
    .then(points => {
        res.status(200).send(points);
    })
    .catch(next);
});

module.exports = server;