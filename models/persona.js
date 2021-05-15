const { Schema, model } = require('mongoose');

const PersonaSchema = Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    puesto: { type: String, required: true },
    horario: { type: String, required: true },
    salario: { type: Number, required: true },
});

PersonaSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});


module.exports = model('Persona', PersonaSchema);