import PropTypes from 'prop-types';

export const Movie = {
  id: PropTypes.number,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string,
};

export const MovieDetailed = {
  ...Movie,
};
