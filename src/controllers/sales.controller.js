const salesService = require('../services/sales.service');
const { buildSalesQuery } = require('../utils/query.filter');

exports.getSales = async (req, res, next) => {
  try {
    const filter = buildSalesQuery(req.query);
    const data = await salesService.getSalesData(filter);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getRevenue = async (req, res, next) => {
  try {
    const filter = buildSalesQuery(req.query);
    const { revenue } = await salesService.getSalesData(filter);
    res.json({ revenue });
  } catch (err) {
    next(err);
  }
};
