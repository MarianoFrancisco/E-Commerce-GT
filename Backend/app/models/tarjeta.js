const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const tarjetaSchema = new Schema({
    numero_tarjeta: {
        type: String
    }, 
    usuario: {
        type: String
    },
    fecha_expiracion: {
        type: String
    },
    csv: {
        type: String
    },
    propietario: {
        type: String
    }
}, {
    versionKey: false
});
module.exports = model('tarjetas', tarjetaSchema);