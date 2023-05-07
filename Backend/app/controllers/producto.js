const Producto = require('../models/producto');
//user
const todosLosProductos = async (req, res) => {
    const select = await Producto.find({ estado:"ACEPTADO"});
    res.json(select);
};
const myProducts = async (req, res) => {
    const select = await Producto.find({ estado:"ACEPTADO",usuario:req.body.id});
    console.log(req.body.id);
    console.log(select);
    res.json(select);
};
const eliminarProducto = async (req, res) => {
    const remove = await Producto.deleteOne({_id:req.body.id});
    console.log(req.body.id);
    res.json(remove);
};
const declineProducts = async (req, res) => {
    const select = await Producto.find({ estado:"RECHAZADO",usuario:req.body.id});
    res.json(select);
};
const pendingProducts = async (req, res) => {
    const select = await Producto.find({ estado:"PENDIENTE",usuario:req.body.id});
    res.json(select);
};
const agregarProducto = async (req, res) => {
    const nuevoProducto = new Producto({
        nombre_producto: req.body.nombre_producto,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        usuario: req.body.usuario,
        existencia: req.body.existencia,
        categoria: req.body.categoria,
        estado: 'PENDIENTE'
    });
    console.log(req.file)
    if(req.file){
        nuevoProducto.setImagen(req.file.filename);
    }
    const insertarNuevoProducto = await nuevoProducto.save();
    res.json(insertarNuevoProducto);
};
//package
const productosPendientes = async (req, res) => {
    const select = await Producto.find({ estado:"PENDIENTE"});
    res.json(select);
};
const aceptarProducto = async (req, res) => {
    const update = await Producto.updateOne({ _id:req.body.id},{$set:{estado:"ACEPTADO"}});
    res.json(update);
};
const rechazarProducto = async (req, res) => {
    const update = await Producto.updateOne({ _id:req.body.id},{$set:{estado:"RECHAZADO"}});
    res.json(update);
};

module.exports = { agregarProducto,todosLosProductos,productosPendientes,aceptarProducto,rechazarProducto,
                    myProducts,declineProducts,pendingProducts,eliminarProducto};