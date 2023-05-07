/*
requerimos dotevn de nuestras variables, express, cors de seguridad, el path y app asignandole express y declaramos el puerto,
así mismo traemos nuestra configuracion de mongodb
*/
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { conexionBD } = require('./config/mongoDB');
const app = express();
const userRoute = require('./app/routes/usuario.routes');
const productRoute = require('./app/routes/producto.routes');
const body_parser = require('body-parser');

const PUERTO = process.env.PUERTO || 5000;
//Hacer uso de cors y permitir los json
app.use(express.json());
app.use(body_parser.json());
app.use(cors());
app.use('/', userRoute);
app.use('/', productRoute);
//ubicacion de las imagenes
app.use('/imgProduct',express.static(path.join(`${__dirname}/img`)));
//Que nuestra aplicacion escuche por el puerto
conexionBD();
app.listen(PUERTO, () => {
    console.log('Puerto: ', PUERTO, ' habilitado');
});