require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Product = require('../models/Product');
const Inventory = require('../models/Inventory');
const Sale = require('../models/Sale');

const seed = async () => {
  await connectDB();
  await Product.deleteMany();
  await Inventory.deleteMany();
  await Sale.deleteMany();

  const product1 = await Product.create({ name: 'iPhone 14', category: 'Electronics', price: 999 });
  const product2 = await Product.create({ name: 'Nike Shoes', category: 'Apparel', price: 120 });

  await Inventory.create({ product: product1._id, quantity: 5 });
  await Inventory.create({ product: product2._id, quantity: 50 });

  await Sale.create({ product: product1._id, quantity: 2, totalPrice: 1998, date: new Date() });
  await Sale.create({ product: product2._id, quantity: 5, totalPrice: 600, date: new Date() });

  console.log('Demo data inserted');
  process.exit();
};

seed();
