var express = require('express')
var router = express.Router()
var task = require('../controllers/task')

/* GET home page. */

router.post('/task', task.submitLead)

router.get('/tasks', task.showAll)
router.get('/task/:id', task.delete)
router.post('/task/:id/update', task.update)

module.exports = router
