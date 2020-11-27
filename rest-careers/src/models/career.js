const moongose = require('mongoose');

const Schema = moongose.Schema;

const CareerSchema = new Schema({
    nombre: String,
    semestres: Number,
    creditos: Number
});

module.exports = moongose.model('career', CareerSchema);