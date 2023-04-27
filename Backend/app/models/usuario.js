const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const usuarioSchema = new Schema({
    user: {
        type: String
    },
    direccion: {
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
module.exports=model('usuarios',usuarioSchema);