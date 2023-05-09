const express = require('express');
const router =express.Router();
const{obtenerTarjetas,insertarTarjeta}=require('../controllers/tarjeta');
router.get('/tarjetas',obtenerTarjetas);
router.post('/saveCard',insertarTarjeta);
module.exports=router;