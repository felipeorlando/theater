export const tmdbImage = (path, width = null) => (
  `https://image.tmdb.org/t/p/${width ? `w${width}` : 'original'}${path}`
);
