const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Iniciar Sesion' });
});
router.get('/home', (req, res) => {
    res.render('./client/index', { title: 'E-Commerce-GT' });
});
router.get('/registro', (req, res) => {
    res.render('./client/registro', { title: 'Registro' });
});
router.get('/package', (req, res) => {
    res.render('./package/index', { title: 'Package' });
});
router.get('/admin', (req, res) => {
    res.render('./admin/index', { title: 'Admin' });
});

module.exports = router;