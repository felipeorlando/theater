export const apiURL = (endpoint, queryParams = {}) => {
  const params = {
    api_key: '19f39f3c484954b02ac387996570be32',
    ...queryParams,
  };

  const urlParams = new URLSearchParams(Object.entries(params));

  return `https://api.themoviedb.org/3${endpoint}?${urlParams.toString()}`;
};

export const endpoints = {
  discover: '/discover/movie',
  search: '/search/movie',
};
