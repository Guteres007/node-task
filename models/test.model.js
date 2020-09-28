const mongose = require('mongoose')

var testSchema = new mongose.Schema({
    name: {
        type: String
    }
})

mongose.model('Test', testSchema)