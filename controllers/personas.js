const { response } = require('express');

const Persona = require('../models/persona');

const getPersonas = async(req, res) => {

    try {

        const personas = await Persona.find({}, 'nombre email role img');

        res.json({
            ok: true,
            personas
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            status,
            msg: 'Error inesperado'
        });
    }

}

const newPersona = async(req, res) => {
    console.log('New Persona');
}

const updatePersona = async(req, res) => {
    console.log('Update Persona');
}

const deletePersona = async(req, res) => {
    console.log('Delete Persona');
}

module.exports = { getPersonas, newPersona, updatePersona, deletePersona }