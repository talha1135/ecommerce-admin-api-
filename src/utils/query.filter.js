// src/utils/query.filter.js

exports.buildSalesQuery = (query) => {
  const filter = {};

  if (query.start && query.end) {
    const start = new Date(query.start);
    const end = new Date(query.end);

    end.setHours(23, 59, 59, 999);

    filter.date = {
      $gte: start,
      $lte: end,
    };
  }

  if (query.product) {
    filter.product = query.product;
  }

  return filter;
};
