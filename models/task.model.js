const mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    name: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

mongoose.model('Task', taskSchema)