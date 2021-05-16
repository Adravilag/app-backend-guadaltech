const { Router } = require("express");
const { check } = require('express-validator');

const { getPersonas, createPersona, updatePersona, deletePersona, getPersonaById } = require('../controllers/personas');

const router = Router();

router.get('/', getPersonas);

router.get('/:id', getPersonaById);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos son obligatorios').not().isEmpty(),
    check('puesto', 'Los apellidos son obligatorios').not().isEmpty(),
    check('salario', 'El salario es obligatorios').not().isEmpty(),
    check('horario', 'El horario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
], createPersona);

router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'Los apellidos son obligatorios').not().isEmpty(),
    check('puesto', 'Los apellidos son obligatorios').not().isEmpty(),
    check('salario', 'El salario es obligatorios').not().isEmpty(),
    check('horario', 'El horario es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
], updatePersona);

router.delete('/:id', deletePersona);

module.exports = router;