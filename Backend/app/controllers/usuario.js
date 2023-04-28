const { json } = require('express');
const Usuario = require('../models/usuario');
const obtenerUsuarios = () => {

};
const loginUsuario = async (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
    const select = await Usuario.find({ user: user, pwd: pwd });
    res.json(select);
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
module.exports = { obtenerUsuarios, loginUsuario, registrarUsuarioComun };