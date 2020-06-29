import React, { useContext, useEffect } from 'react';

import { getDiscoverMovies, searchMovies } from 'fetchers';

import { initialValues } from 'stores/HomePage';
import Container from 'ui/components/Container';
import MovieCard from './MovieCard';
import * as S from './styles';
import Context from '../context';

const MoviesList = () => {
  const { setStore, store: { discoverMovies, search, status } } = useContext(Context);

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

  return (
    <S.Wall>
      <Container>
        <S.Header>
          <S.Title>{ search.term ? `Searching for: ${search.term}` : 'Dicover Movies' }</S.Title>
        </S.Header>

        <S.List>
          {
            status === 'loaded'
              ? (
                  search.term
                    ? search.result
                    : discoverMovies
                ).map((movie) => <MovieCard movie={movie} key={movie.id} />)
              : null
          }
        </S.List>
      </Container>
    </S.Wall>
  );
};

export default React.memo(MoviesList);
