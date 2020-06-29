import React, { useContext } from 'react';

import Container from 'ui/components/Container';
import MovieCard from './MovieCard';
import * as S from './styles';
import Context from '../context';

const MoviesList = () => {
  const { store: { discoverMovies, status } } = useContext(Context);

  return (
    <S.Wall>
      <Container>
        <S.Title>Discover Movies</S.Title>

        <S.List>
          {
            status !== 'loaded'
              ? null
              : discoverMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          }
        </S.List>
      </Container>
    </S.Wall>
  );
}

export default React.memo(MoviesList);
