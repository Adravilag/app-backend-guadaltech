const { response } = require('express');

const Persona = require('../models/persona');

const getPersonas = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    try {
        const personas = await Persona.find({}, 'nombre apellidos email role img').skip(desde).limit(5);

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

const createPersona = async(req, res) => {

    try {

        const persona = new Persona(req.body);

        await persona.save();

        res.json({
            ok: true,
            persona
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });

    }

}

const updatePersona = async(req, res) => {

    const id = req.params.id;
    const campos = req.body;

    try {

        const personaDB = await Persona.findById(id);

        if (!personaDB) {
            return res.status(404).json({
                ok: false,
                msg: "No existe una persona con ese id"
            })
        }

        const personaActualizada = await Persona.findByIdAndUpdate(id, campos, { new: true });

        console.log(personaActualizada);

        res.json({
            ok: true,
            personaActualizada
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

const deletePersona = async(req, res) => {

    const id = req.params.id;

    try {

        const persona = await Persona.findByIdAndRemove(id);

        if (!persona) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una persona con ese ID'
            });
        }

        res.json({
            ok: true,
            msg: 'Persona eliminada con éxito'
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar'
        });

    }

}

module.exports = { getPersonas, createPersona, updatePersona, deletePersona }