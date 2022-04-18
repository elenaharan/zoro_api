const mongoose = require('mongoose');

//Defining the Schema
let clothesSchema = mongoose.Schema ({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }
})

//Creating the Models
let Clothes = mongoose.model('Clothes', clothesSchema);

//exporting the Models
module.exports.Clothes = Clothes;