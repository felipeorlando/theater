import React, { useState, useEffect } from 'react';

import { getDiscoverMovies } from 'fetchers';
import { initialValues } from 'stores/HomePage';
import Context from './context';
import Hero from './Hero';
import MoviesList from './MoviesList';

const HomeView = () => {
  const [store, setStore] = useState(initialValues);

  const providerValue = { store, setStore };

  useEffect(() => {
    const getMoviesData = async () => {
      try {
        const discoverMovies = await getDiscoverMovies();

        setStore({
          ...initialValues,
          discoverMovies: discoverMovies.results,
          status: 'loaded',
        });
      } catch(e) {
        setStore({
          ...initialValues,
          status: 'error',
        });
      }
    };

    getMoviesData();
  }, []);

  return (
    <Context.Provider value={providerValue}>
      <Hero />
      <MoviesList />
    </Context.Provider>
  );
};

export default React.memo(HomeView);
