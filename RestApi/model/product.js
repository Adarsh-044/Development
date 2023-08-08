const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      price: {
            type: Number,
            required: [true, "Price must be provided"]
      },
      shop: String,
      discount: Number,
      feature: String,
      rating: Number,
      company: String,

});
const product = mongoose.model('Product', productSchema);
module.exports = product; 