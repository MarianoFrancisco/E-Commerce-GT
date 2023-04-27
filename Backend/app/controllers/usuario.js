const Usuario = require('../models/usuario');
const obtenerUsuarios = () => {

};
const loginUsuario = async (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
    const select = await Usuario.find({ user: user, pwd: pwd });
    res.json(select);
};
module.exports = { obtenerUsuarios, loginUsuario };