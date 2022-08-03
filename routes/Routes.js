const router = require('express').Router();

const apiNASA = require('../Api/Api')

router.get('/NASA', apiNASA.consumirApi);

module.exports = router;