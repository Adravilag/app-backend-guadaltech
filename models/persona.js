const { Schema, model } = require('mongoose');

const PersonaSchema = Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: 'USER_ROLE' },
    img: { type: String }
});

module.exports = model('Persona', PersonaSchema);