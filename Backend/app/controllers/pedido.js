const Pedido = require('../models/pedido');
const obtenerPedidos = async (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
    const select = await Pedido.find({ user: user, pwd: pwd });
    res.json(select);
};
const guardarPedido = async (req, res) => {
    const numero_tarjeta = req.body.numero_tarjeta;
    const usuario = req.body.usuario;
    const fecha_expiracion = req.body.fecha_expiracion;
    const csv = req.body.csv;
    const propietario = req.body.propietario;
    const select = await Tarjeta.find({ numero_tarjeta: numero_tarjeta });
    if (Object.keys(select).length == 1) {
        const tarjetaDuplicada = {};
        res.json(tarjetaDuplicada);
    } else {
        const nuevaTarjeta = new Tarjeta({
            usuario_compra: usuario_compra,
            usuario_venta: usuario_venta,
            imagen: imagen,
            producto: producto,
            cantidad: cantidad,
            precio: precio,
            total: total,
            fecha_entrega: fecha_entrega
        });
        const insertarTarjeta = await nuevaTarjeta.save();
        res.json(insertarTarjeta);
    }
};
module.exports = { obtenerPedidos, guardarPedido };