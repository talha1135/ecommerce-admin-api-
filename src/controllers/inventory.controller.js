const inventoryService = require('../services/inventory.service');

exports.getInventory = async (req, res, next) => {
  try {
    const threshold = parseInt(req.query.threshold) || 10;
    const data = await inventoryService.getInventoryStatus(threshold);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
