import mongoose from 'mongoose';

import '../models/alcohols';

const Alcohol = mongoose.model('Alcohol');

export function setUpConnection() {
  mongoose.connection(`mongodb://localhost/alcohols`)
}

export function listAlcohols (){
  return Alcohol.find();
}