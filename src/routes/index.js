const routes = {
  home: '/',
  movie: (movieId = null) => movieId ? `/movie/${movieId}` : '/movie/:movieId',
};

export default routes;
