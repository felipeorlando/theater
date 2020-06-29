import React, { useContext, useEffect } from 'react';

import { getDiscoverMovies, searchMovies } from 'fetchers';

import { initialValues } from 'stores/HomePage';
import Container from 'ui/components/Container';
import MovieCard from './MovieCard';
import * as S from './styles';
import Context from '../context';
import Stars from './Stars';

const MoviesList = () => {
  const { setStore, store: { discoverMovies, rating, search, status } } = useContext(Context);

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const discoverMovies = await getDiscoverMovies();

        setStore((prevStore) => ({
          ...initialValues,
          discoverMovies: discoverMovies.results,
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
  }, [setStore]);

  useEffect(() => {
    const searchTerm = search.term;

    if (searchTerm) {
      const getMoviesData = async () => {
        try {
          const findedMovies = await searchMovies(searchTerm);

          setStore((prevStore) => ({
            ...prevStore,
            search: {
              ...prevStore.search,
              result: findedMovies.results,
            },
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
    }
  }, [setStore, search.term]);

  const movies = status === 'loaded'
    ? (search.term ? search.result : discoverMovies).filter((movie) => {
        if (!rating) return true;

        const maxRating = (rating * 2) + 1;
        const minRating = maxRating - 2;

        return movie.voteAverage >= minRating && movie.voteAverage < maxRating;
      })
    : null;

  return (
    <S.Wall>
      <Container>
        <S.Header>
          <S.Title>{ search.term ? `Searching for: ${search.term}` : 'Dicover Movies' }</S.Title>

          <Stars />
        </S.Header>

        <S.List>
          {
            movies
              ? (
                movies.length > 0
                  ? movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
                  : <span>No movies finded :(</span>
              ) : <span>Loading...</span>
          }
        </S.List>
      </Container>
    </S.Wall>
  );
};

export default React.memo(MoviesList);
