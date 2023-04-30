2.Producto(contiene Usuario)
2-codigo-producto
2-Nombre del producto
2-Descripción del Producto
2-Imágen del Producto
2-Precio del Producto
2-usuario
2-cantidad
2-Categoría del Producto:
2-1-Tecnología
2-2-Hogar
2-3-Académico
2-4-Literatura
2-5-Decoración
2-6-Otros
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const productoSchema = new Schema({
    codigo_producto: {
        type: String
    },
    nombre_producto: {
        type: String
    },
    tipo_usuario: {
         type: String, enum: ['Comun', 'Paqueteria', 'Administrador']
    },
    pwd: {
        type: String
    }
}, {
    versionKey: false
});
module.exports=model('productos',productoSchema);