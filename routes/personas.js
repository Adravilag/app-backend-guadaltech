const { Router } = require("express");

const { getPersonas, createPersona, updatePersona, deletePersona } = require('../controllers/personas');

const router = Router();

router.get('/', getPersonas);

router.post('/', createPersona);

router.put('/:id', updatePersona);

router.delete('/:id', deletePersona);

module.exports = router;