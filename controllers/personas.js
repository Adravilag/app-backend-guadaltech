const { response } = require('express');
const { compareHorario, comparePuesto, compareSalario } = require('../helpers/conditionPersonas');

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

    let msg = 'Error, no se ha podido crear Persona';

    try {

        const persona = new Persona(req.body);

        const { salario, horario, puesto } = persona;

        if (!compareHorario(horario)) {
            msg = 'El horario no es correcto. El horario debe ser: Jornada completa, Tiempo parcial 1 o Tiempo parcial 2';
            throw new Error;
        } else if (!comparePuesto(puesto)) {
            msg = 'El puesto no es correcto. El puesto deber ser: Administrativ@, Diseñador/a, Desarrollador/a, Front-End Developer, Back-End Developer o Full-Stack Developer';
            throw new Error;
        } else if (!compareSalario(salario)) {
            msg = 'El salario no es correcto. El sueldo debe ser: 13000, 15000, 18000, 20000, 22000, 23000 o 25000';
            throw new Error;
        }

        await persona.save();

        res.json({
            ok: true,
            persona
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg
        });

    }

}

const updatePersona = async(req, res) => {

    const id = req.params.id;
    const campos = req.body;
    const { salario, horario, puesto } = campos;

    let msg = 'Error, no se ha podido actualizar Persona'

    try {

        const personaDB = await Persona.findById(id);

        if (!compareHorario(horario)) {
            msg = 'El horario no es correcto. El horario debe ser: Jornada completa, Tiempo parcial 1 o Tiempo parcial 2.';
            throw new Error;
        } else if (!comparePuesto(puesto)) {
            msg = 'El puesto no es correcto. El puesto deber ser: Administrativ@, Diseñador/a, Desarrollador/a, Front-End Developer, Back-End Developer o Full-Stack Developer.';
            throw new Error;
        } else if (!compareSalario(Number(salario))) {
            msg = 'El salario no es correcto. El sueldo debe ser: 13000, 15000, 18000, 20000, 22000, 23000 o 25000.';
            throw new Error;
        }


        if (!personaDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No se ha encontrado la Persona con ese identificador'
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
            msg
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