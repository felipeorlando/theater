import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { getMovieById } from 'fetchers';
import { tmdbImage } from 'helpers/tmdbImage';
import { initialValues } from 'stores/MoviePage';
import Container from 'ui/components/Container';
import Header from 'ui/components/Header';
import Context from './context';
import * as S from './styles';

const MovieView = ({ movieId }) => {
  const [store, setStore] = useState(initialValues);

  const providerValue = { store, setStore };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const movie = await getMovieById(movieId);

        setStore((prevStore) => ({
          ...initialValues,
          movie,
          status: 'loaded',
        }));
      } catch(e) {
        setStore((prevStore) => ({
          ...prevStore,
          status: 'error',
        }));
      }
    };

    getMoviesData();
  }, [movieId]);

  if (!store.movie) {
    return null;
  }

  const { movie } = store;

  return (
    <Context.Provider value={providerValue}>
      <Helmet>
        <title>{movie.title} - Theater</title>
      </Helmet>

      <Header
        title={movie.title}
        subtitle={movie.tagline}
        cover={tmdbImage(movie.backdropPath)}
      />

      <Container>
        <S.Overview>
          <S.Poster src={tmdbImage(movie.posterPath, 300)} />

          <S.Content>
            <S.Summary>{movie.releaseDate}</S.Summary>

            <S.Description>
              {movie.overview}
            </S.Description>
          </S.Content>
        </S.Overview>
      </Container>
    </Context.Provider>
  );
};

export default React.memo(MovieView);
