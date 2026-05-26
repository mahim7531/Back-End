const pagination = (page, limit) => {
  const currentPage = parseInt(page) || 1;
  const perPage = parseInt(limit) || 10;

  const skip = (currentPage - 1) * perPage;

  return {
    currentPage,
    perPage,
    skip,
  };
};

module.exports = pagination;