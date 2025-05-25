const Inventory = require('../models/Inventory');
require('../models/Product');

exports.getInventoryStatus = async (lowStockThreshold = 10) => {
  try {
    const inventory = await Inventory.find().populate('product');
    const lowStock = inventory.filter(item => item.quantity <= lowStockThreshold);
    return { inventory, lowStock };
  } catch (error) {
    console.error('Error fetching inventory status:', error);
    throw new Error('Could not get inventory status');
  }
};
