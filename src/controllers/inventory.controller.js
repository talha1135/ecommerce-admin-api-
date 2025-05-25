const inventoryService = require('../services/inventory.service');

exports.getInventory = async (req, res, next) => {
  try {
    const data = await inventoryService.getInventoryStatus();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
