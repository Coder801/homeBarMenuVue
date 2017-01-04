import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const AlcoholsSchema = new Schema({
  title: {
    type: String
  }, 
  count: {
    type: Number
  },
  price: {
    type: Number
  }
})

const Alcohol = mongoose.model('Alcohol', AlcoholsSchema)