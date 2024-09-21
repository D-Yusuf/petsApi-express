const { model, Schema } = require('mongoose');
const a = "a"

  const petSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      set: v=> v.split('').map((char, i)=> i == 0 ? char.toUpperCase() : char.toLowerCase()).join(''),
      required: true,
    },
    adopted: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String, 
    },
    age: {
      type: Number,
    }
  }, { timestamps: true });
  
  const Pet = model('Pet', petSchema);
  module.exports = Pet;
  
