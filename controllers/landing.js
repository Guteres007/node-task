const mongoose = require("mongoose")
var Test = mongoose.model("Test")


exports.get_landing = async function(req, res, next) {
    
   const data = await Test.findById(req.params.id)
    res.render('landing', { title: data.name });
 

    
  }

exports.submit_lead = function(req, res, next) {
  console.log(req.body.email)
  res.redirect('/')
}