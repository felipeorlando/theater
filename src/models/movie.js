import PropTypes from 'prop-types';

export const Movie = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};
