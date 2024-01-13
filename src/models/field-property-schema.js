const mongoose = require('mongoose');

const numberFieldType = new mongoose.Schema({
  required: {
    type: Boolean,
    default:false
  },
  defaultValue: {
      type: Number,
      default:null
  },
  unique: {
      type: Number,
      default:false
  },
  maxValue: {
      type: Number,
      default:null
  },
  minValue: {
      type: Number,
      default:null
  },
  privateField: {
      type: Boolean,
      default:false
  }
});
  
const textFieldType = new mongoose.Schema({
  required: {
    type: Boolean,
    default:false
  },
  defaultValue: {
    type: String,
    default:null
  },
  RegExpPattern: {
    type: String,
    default:null
  },
  unique: {
    type: Boolean,
    default:false
  },
  maxLength: {
      type: Number,
      default:null
  },
  minLength: {
      type: Number,
      default:null
  },
  privateField: {
      type: Boolean,
      default:false
  } 
});

const booleanFieldType = new mongoose.Schema({
  required: {
    type: Boolean,
    default:false
  },
  defaultValue: {
      type: Boolean,
      default:null
  },
  privateField: {
      type: Boolean,
      default:false
  },
});


module.exports = {
    booleanFieldType,
    numberFieldType,
    textFieldType,
}