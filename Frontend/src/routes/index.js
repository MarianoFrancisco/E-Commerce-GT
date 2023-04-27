const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Iniciar Sesion' });
});
router.get('/client', (req, res) => {
    res.render('./client/index', { title: 'Inicio' });
});
router.get('/package', (req, res) => {
    res.render('./package/index', { title: 'Inicio' });
});
router.get('/admin', (req, res) => {
    res.render('./admin/index', { title: 'Inicio' });
});
module.exports = router;