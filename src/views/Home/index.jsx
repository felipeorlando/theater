import React, { useState } from 'react';

import { initialValues } from 'stores/HomePage';
import Context from './context';
import Hero from './Hero';
import MoviesList from './MoviesList';

const HomeView = () => {
  const [store, setStore] = useState(initialValues);

  const providerValue = { store, setStore };

  return (
    <Context.Provider value={providerValue}>
      <Hero />
      <MoviesList />
    </Context.Provider>
  );
};

export default React.memo(HomeView);
