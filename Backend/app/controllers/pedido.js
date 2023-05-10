const Pedido = require('../models/pedido');
const obtenerPedidos = async (req, res) => {
    const user = req.body.user;
    const select = await Pedido.find({estado:"EN CURSO"});
    res.json(select);
};
const obtenerPedidoEnCurso = async (req, res) => {
    const id = req.query.id;
    const select = await Pedido.find({ usuario_compra:id,estado:"EN CURSO" });
    res.json(select);
};
const estadoEntregado = async (req, res) => {
    const update = await Pedido.updateOne({ _id:req.body.id},{$set:{estado:"ENTREGADO"}});
    res.json(update);
};
const obtenerPedidoEntregado = async (req, res) => {
    const id = req.query.id;
    const select = await Pedido.find({ usuario_compra:id,estado:"ENTREGADO" });
    res.json(select);
};
const guardarPedido = async (req, res) => {
    const usuario_compra = req.body.usuario_compra;
    const usuario_venta = req.body.usuario_venta;
    const imagen = req.body.imagen;
    const nombre_producto=req.body.nombre_producto;
    const producto = req.body.producto;
    const cantidad = req.body.cantidad;
    const precio = req.body.precio;
    const total = req.body.total;
    const estado = "EN CURSO";
    const fecha_entrega = req.body.fecha_entrega;
    const nuevoPedido = new Pedido({
        usuario_compra: usuario_compra,
        usuario_venta: usuario_venta,
        imagen: imagen,
        nombre_producto:nombre_producto,
        producto: producto,
        cantidad: cantidad,
        precio: precio,
        total: total,
        estado: estado,
        fecha_entrega: fecha_entrega
    });
    const insertarPedido = await nuevoPedido.save();
    res.json(insertarPedido);
    console.log(insertarPedido);
};
module.exports = { obtenerPedidos, guardarPedido,obtenerPedidoEnCurso,obtenerPedidoEntregado ,estadoEntregado};