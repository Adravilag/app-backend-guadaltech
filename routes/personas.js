const { Router } = require("express");

const { getPersonas, createPersona, updatePersona, deletePersona, getPersonaById } = require('../controllers/personas');

const router = Router();

router.get('/', getPersonas);

router.get('/:id', getPersonaById);

router.post('/', createPersona);

router.put('/:id', updatePersona);

router.delete('/:id', deletePersona);

module.exports = router;