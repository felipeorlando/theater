const routes = {
  home: '/',
  movie: (id = null) => id ? `/movie/${id}` : '/movie/:id',
};

export default routes;
