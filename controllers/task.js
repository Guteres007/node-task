const mongoose = require("mongoose")
var Task = mongoose.model("Task")



exports.submitLead = async (req, res, next) =>{
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
    //zde by měl být flash message
    res.render('all', { tasks: data, error: true });
}

exports.delete = async (req, res, next) => {
  //console.log(req.params.id)
  const data = await Task.findByIdAndRemove(req.params.id)
  res.redirect('/tasks')
}

exports.update = async (req,res, next) => {
  await Task.findByIdAndUpdate(req.params.id , {name: req.body.name})
  const data = await Task.find({})
  //zde by měl být flash message
  res.render('all', { tasks: data, error: true });
}