const { json } = require('express');
const Usuario = require('../models/usuario');
const obtenerEmpleados = async (req, res) =>  {
    const select = await Usuario.find({$or:[{ tipo_usuario: 'Administrador' }, { tipo_usuario: 'Paqueteria'}]});
    res.json(select);
};
const eliminarEmpleado = async (req, res) =>  {
    const remove = await Usuario.deleteOne({_id:req.body.id});
    res.json(remove);
};
const loginUsuario = async (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
    const select = await Usuario.find({ user: user, pwd: pwd });
    res.json(select);
};
const registrarUsuarioEmpleado = async (req, res) => {
    const user = req.body.user;
    const select = await Usuario.find({ user: user });
    if (Object.keys(select).length ==1) {
        const usuarioDuplicado={};
        res.json(usuarioDuplicado);
    } else {
        const nuevoUsuarioComun = new Usuario({
            user: req.body.user,
            direccion: req.body.direccion,
            tipo_usuario: req.body.rol,
            pwd: req.body.pwd
        });
        const insertarUsuarioComun = await nuevoUsuarioComun.save();
        res.json(insertarUsuarioComun);
    }
};
const registrarUsuarioComun = async (req, res) => {
    const user = req.body.user;
    const select = await Usuario.find({ user: user });
    if (Object.keys(select).length ==1) {
        const usuarioDuplicado={};
        res.json(usuarioDuplicado);
    } else {
        const nuevoUsuarioComun = new Usuario({
            user: req.body.user,
            direccion: req.body.direccion,
            tipo_usuario: "Comun",
            pwd: req.body.pwd
        });
        const insertarUsuarioComun = await nuevoUsuarioComun.save();
        res.json(insertarUsuarioComun);
    }
};
module.exports = { obtenerEmpleados, loginUsuario, registrarUsuarioComun ,registrarUsuarioEmpleado,eliminarEmpleado};