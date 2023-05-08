const express = require('express')
const router = express.Router()
const{agregarProducto,todosLosProductos, productosPendientes,aceptarProducto,rechazarProducto,
    myProducts,declineProducts,pendingProducts,eliminarProducto,requestToPackage}=require('../controllers/producto');
const controller = require('../controllers/img')
//user
router.post('/nuevoProducto',controller.upload,agregarProducto);
router.get('/allProducts',todosLosProductos);
router.post('/solicitarRevision',requestToPackage);
router.post('/removeProduct',eliminarProducto);
router.post('/myProducts',myProducts);
router.post('/declineProducts',declineProducts);
router.post('/pendingProducts',pendingProducts);
//package
router.post('/aceptarProducto',aceptarProducto);
router.post('/rechazarProducto',rechazarProducto);
router.get('/pendientProducts',productosPendientes);
module.exports = router;