const Inventory = require('../models/Inventory');
require('../models/Product');

exports.getInventoryStatus = async (lowStockThreshold = 10) => {
  const inventory = await Inventory.find().populate('product');
  const lowStock = inventory.filter(item => item.quantity <= lowStockThreshold);
  return { inventory, lowStock };
};
