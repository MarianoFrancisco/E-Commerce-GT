const express = require('express');
const router =express.Router();
const{obtenerPedidos,guardarPedido}=require('../controllers/pedido');
router.get('/pedidos',obtenerPedidos);
router.get('/guardarPedido',guardarPedido);
module.exports=router;