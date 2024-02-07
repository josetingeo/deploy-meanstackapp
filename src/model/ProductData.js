const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL)
//mongoose.connect("Bmongodb+srv://dolphin:josetin123@cluster0.ovfn96a.mongodb.net/ProductsD")



const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productID:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageURL:String

});


var ProductData = mongoose.model('products',ProductSchema);

module.exports = ProductData;

