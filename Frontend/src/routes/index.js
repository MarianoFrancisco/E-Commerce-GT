const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Iniciar Sesion' });
});
//cliente
router.get('/home', (req, res) => {
    res.render('./client/index', { title: 'E-Commerce-GT' });
});
router.get('/comprar', (req, res) => {
    res.render('./client/comprarProducto', { title: 'E-Commerce-GT' });
});
router.get('/vender', (req, res) => {
    res.render('./client/venderProducto', { title: 'E-Commerce-GT' });
});
router.get('/pedidos', (req, res) => {
    res.render('./client/pedidoPropio', { title: 'E-Commerce-GT' });
});
router.get('/carrito', (req, res) => {
    res.render('./client/carrito', { title: 'E-Commerce-GT' });
});
router.get('/registro', (req, res) => {
    res.render('./client/registro', { title: 'Registro' });
});
//paqueteria
router.get('/package', (req, res) => {
    res.render('./package/index', { title: 'Package' });
});
router.get('/administrarPedidos', (req, res) => {
    res.render('./package/pedido', { title: 'Package' });
});
router.get('/administrarProductos', (req, res) => {
    res.render('./package/ingresoProducto', { title: 'Package' });
});
//administracion
router.get('/admin', (req, res) => {
    res.render('./admin/index', { title: 'Admin' });
});

module.exports = router;