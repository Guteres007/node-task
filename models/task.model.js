const mongose = require('mongoose')

var taskSchema = new mongose.Schema({
    name: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

mongose.model('Task', taskSchema)