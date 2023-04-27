const express = require('express');
const router =express.Router();
const{obtenerUsuarios,loginUsuario}=require('../controllers/usuario');
router.get('/',obtenerUsuarios);
router.post('/',loginUsuario);
module.exports=router;