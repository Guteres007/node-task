const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useCreateIndex: true },
    (err) => {
    if (!err) {console.log("Connected")}
    else {console.log("Disconnected")}
})

require('./test.model')