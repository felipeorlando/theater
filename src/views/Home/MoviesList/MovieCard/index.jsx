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
  },
}) => {
  const imageUrl = tmdbImage(posterPath, 500);
  const releaseYear = releaseDate.split('-')[0];

  return (
    <S.Card to={routes.movie(id)}>
      <S.Image src={imageUrl} />

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Year>{releaseYear}</S.Year>
      </S.Content>
    </S.Card>
  );
};

MovieCard.propTypes = {
  movie: Movie,
};

export default React.memo(MovieCard);
