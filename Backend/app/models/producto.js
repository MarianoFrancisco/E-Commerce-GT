const mongoose = require('mongoose');
require('dotenv').config();
const Schema = mongoose.Schema;
const model = mongoose.model;
const productoSchema = new Schema({
    nombre_producto: {
        type: String
    },
    descripcion: {
        type: String
    },
    imagen: {
         type: String
    },
    precio: {
        type: Number
    },
    usuario: {
        type: String
    },
    existencia: {
        type: Number
    },
    categoria: {
        type: Array
    },
    estado: {
        type: String, enum: ['PENDIENTE', 'ACEPTADO', 'RECHAZADO']
    }
}, {
    versionKey: false
});
productoSchema.methods.setImagen = function setImagen(nombreImagen){
    this.imagen= process.env.HOST+":"+process.env.PUERTO+"/imgProduct/"+`${nombreImagen}`
}
module.exports=model('productos',productoSchema);