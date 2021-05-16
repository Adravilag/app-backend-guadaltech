const { response } = require('express');

const Persona = require('../models/persona');

const getPersonas = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;
    const limit = Number(req.query.limit) || 0;
    try {

        const [personas, total] = await Promise.all([
            Persona.find({}, 'nombre apellidos email puesto horario salario').skip(desde).limit(limit),
            Persona.countDocuments()
        ]);

        res.json({
            ok: true,
            personas,
            total
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            status,
            msg: 'Error, no se ha podido mostrar las Personas'
        });
    }

}

const getPersonaById = async(req, res = response) => {

    const id = req.params.id;

    try {

        const persona = await Persona.findById(id, 'nombre apellidos email puesto horario salario');
        if (!persona) {
            res.status(404).json({
                ok: false,
                msg: "No existe la persona con ese identificador"
            });
        }

        res.json({
            ok: true,
            persona
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
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
            msg: 'Error, no se ha podido crear Persona'
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
                msg: "No existe la persona con ese identificador"
            })
        }

        const personaActualizada = await Persona.findByIdAndUpdate(id, campos, { new: true });

        res.json({
            ok: true,
            personaActualizada
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            status,
            msg: 'Error, no se ha podido actualizar Persona'
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
                msg: "No existe la persona con ese identificador"
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
            msg: 'Error al eliminar Persona'
        });

    }

}

module.exports = { getPersonas, getPersonaById, createPersona, updatePersona, deletePersona }