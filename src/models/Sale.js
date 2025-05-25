const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
  quantity: Number,
  totalPrice: Number,
  date: Date
});

module.exports = mongoose.model('Sale', saleSchema);
