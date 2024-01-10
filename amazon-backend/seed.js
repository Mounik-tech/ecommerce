import { products } from "./products.js";
import { users } from "./users.js";
import mongoose from "mongoose";
import Product from './models/productsModel.js'
import User from './models/userModel.js'

mongoose.connect("mongodb+srv://Mounik:Mounik@cluster0.oaw11vk.mongodb.net/", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDB() {
  await User.deleteMany({});
  await User.insertMany(users);
  await Product.deleteMany({});
  await Product.insertMany(products);
}

seedDB().then(() => {
  mongoose.connection.close();
});