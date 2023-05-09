const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const  pedidoSchema = new Schema({
    usuario_compra: {
        type: String
    }, 
    usuario_venta: {
        type: Array
    },
    imagen: {
        type: Array
    },
    producto: {
        type: Array
    },
    cantidad: {
        type: Array
    },
    precio: {
        type: Array
    },
    total: {
        type: Number
    },
    estado: {
        type: Array
    },
    fecha_entrega: {
        type: Date
    }
}, {
    versionKey: false
});
module.exports = model('pedidos', pedidoSchema);