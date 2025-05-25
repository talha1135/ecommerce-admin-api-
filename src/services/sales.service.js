require('../models/Product');
const Sale = require('../models/Sale');
const { calculateRevenueByPeriod } = require('../helpers/revenue.helper');

exports.getSalesData = async (filter) => {
  const sales = await Sale.find(filter).populate('product');
  const revenue = calculateRevenueByPeriod(sales);
  return { sales, revenue };
};
