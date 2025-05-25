exports.calculateRevenueByPeriod = (sales) => {
    return sales.reduce((total, s) => total + s.totalPrice, 0);
  };
  