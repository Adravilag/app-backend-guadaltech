const { Router } = require("express");

const router = Router();

router.get('/', () => console.log('Get Personas'));

router.post('/', () => console.log('Post Personas'));

router.put('/:id', () => console.log('Put Persona'));

router.delete('/:id', () => console.log('Delete Persona'));

module.exports = router;