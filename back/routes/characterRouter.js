const app = require('express');
const router = app.Router();
const characterService = require('../services/characterService');

router.get('/test', (req, res) => {
    res.json(characterService.getTest());
})

module.exports = router;