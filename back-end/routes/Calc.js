var express = require('express')
const { addCalc, getCalc } = require('../controllers/Calc')
var router = express.Router()
router.get('/getCalc', getCalc)
router.post('/addCalc', addCalc)

module.exports = router;