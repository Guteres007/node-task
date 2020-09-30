const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/task-database', {
    useNewUrlParser: true,
    useCreateIndex: true },
    (err) => {
    if (!err) {console.log("Connected")}
    else {console.log("Disconnected")}
})

module.exports = mongoose