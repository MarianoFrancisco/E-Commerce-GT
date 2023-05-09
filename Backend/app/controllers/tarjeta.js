const Tarjeta = require('../models/tarjeta');
const obtenerTarjetas = async (req, res) => {
    const id = req.query.id;
    const select = await Tarjeta.find({ usuario:id});
    res.json(select);
};
const insertarTarjeta = async (req, res) => {
    const numero_tarjeta = req.body.numero_tarjeta;
    const usuario = req.body.usuario;
    const fecha_expiracion = req.body.fecha_expiracion;
    const csv = req.body.csv;
    const propietario = req.body.propietario;
    const select = await Tarjeta.find({ numero_tarjeta:numero_tarjeta });
    if (Object.keys(select).length ==1) {
        const tarjetaDuplicada={};
        res.json(tarjetaDuplicada);
    } else {
        const nuevaTarjeta = new Tarjeta({
            numero_tarjeta:numero_tarjeta,
            usuario:usuario,
            fecha_expiracion:fecha_expiracion,
            csv:csv,
            propietario:propietario
        });
        const insertarTarjeta = await nuevaTarjeta.save();
        res.json(insertarTarjeta);
    }
};
module.exports = { obtenerTarjetas,insertarTarjeta};