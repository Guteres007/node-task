const mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

mongoose.model('Task', taskSchema)