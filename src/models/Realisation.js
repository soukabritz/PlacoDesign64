const mongoose = require('mongoose');

const realisationSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: String,
  imageUrl: { type: String, required: true },
  date: { type: Date, default: Date.now },
  showOnHome: { type: Boolean, default: false }
});

module.exports = mongoose.model('Realisation', realisationSchema); 