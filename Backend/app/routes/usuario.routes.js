const express = require('express');
const router =express.Router();
const{obtenerUsuarios,loginUsuario,registrarUsuarioComun}=require('../controllers/usuario');
router.get('/obtener',obtenerUsuarios);
router.post('/login',loginUsuario);
router.post('/registroComun',registrarUsuarioComun);
module.exports=router;