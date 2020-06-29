import PropType from 'prop-types';
import React from 'react';

import { tmdbImage } from 'helpers/tmdbImage';
import { Movie } from 'models/movie';
import * as S from './styles';
import routes from 'routes';

const MovieCard = ({
  movie: {
    id,
    posterPath,
    releaseDate,
    title,
    voteAverage,
  },
}) => {
  const imageUrl = tmdbImage(posterPath, 500);
  const releaseYear = releaseDate ? releaseDate.split('-')[0] : null;

  return (
    <S.Card to={routes.movie(id)}>
      <S.Image src={imageUrl} />

      <S.Content>
        <S.Title>{title}</S.Title>

        <S.Year>{releaseYear} - {voteAverage}</S.Year>
      </S.Content>
    </S.Card>
  );
};

MovieCard.propTypes = {
  movie: PropType.shape(Movie),
};

export default React.memo(MovieCard);
