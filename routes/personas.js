const { Router } = require("express");

const { getPersonas, newPersona, updatePersona, deletePersona } = require('../controllers/personas');

const router = Router();

router.get('/', getPersonas);

router.post('/', newPersona);

router.put('/:id', updatePersona);

router.delete('/:id', deletePersona);

module.exports = router;