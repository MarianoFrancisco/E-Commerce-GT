const express = require('express');
const router =express.Router();
const{loginUsuario,registrarUsuarioComun,obtenerEmpleados,registrarUsuarioEmpleado,eliminarEmpleado}=require('../controllers/usuario');
router.get('/empleados',obtenerEmpleados);
router.post('/login',loginUsuario);
router.post('/registroComun',registrarUsuarioComun);
router.post('/registroEmpleado',registrarUsuarioEmpleado);
router.delete('/removeEmpleado',eliminarEmpleado);
module.exports=router;