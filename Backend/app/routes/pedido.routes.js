const express = require('express');
const router =express.Router();
const{obtenerPedidos,guardarPedido,obtenerPedidoEnCurso,
    obtenerPedidoEntregado,estadoEntregado}=require('../controllers/pedido');
router.get('/pedidos',obtenerPedidos);
router.get('/pedidoEnCurso',obtenerPedidoEnCurso);
router.get('/pedidoEntregado',obtenerPedidoEntregado);
router.put('/estadoEntregado',estadoEntregado);
router.post('/guardarPedido',guardarPedido);
module.exports=router;