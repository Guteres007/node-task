const mongose = require('mongoose')

var taskSchema = new mongose.Schema({
    name: {
        type: String
    }
})

mongose.model('Task', taskSchema)