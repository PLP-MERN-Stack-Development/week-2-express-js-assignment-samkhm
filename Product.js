const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    name: String,
    description: String,
    price: Number,
    category: String,
    inStock: { type: Boolean, default: false }
});


module.exports = mongoose.model('Product', productSchema);