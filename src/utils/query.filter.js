exports.buildSalesQuery = (query) => {
    const filter = {};
    if (query.start && query.end) {
      filter.date = {
        $gte: new Date(query.start),
        $lte: new Date(query.end),
      };
    }
    if (query.product) filter.product = query.product;
    return filter;
  };
  