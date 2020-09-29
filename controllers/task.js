const mongoose = require("mongoose")
var Task = mongoose.model("Task")



exports.submitLead = function(req, res, next) {
  new Task(req.body).save().then(task => {
    if(task) {
      res.redirect('/tasks')
    }
  }).catch(error => {
    console.log(error.errors.name)
  })
  
}

exports.showAll = async (req, res, next) => {
  const data = await Task.find({})
  res.render('all', { tasks: data });
}

exports.delete = async (req, res, next) => {
  const data = await Task.findOneAndDelete(req.body.id)
  res.redirect('/tasks')
}