import React from 'react';
import { Router } from '@reach/router';

import routes from 'routes';
import RootWrapper from 'ui/components/RootWrapper';
import HomeView from 'views/Home';
import MovieView from 'views/Movie';
import NotFoundView from 'views/NotFound';

const App = () => (
  <RootWrapper>
    <Router>
      <NotFoundView default />
      <HomeView path={routes.home} />
      <MovieView path={routes.movie()} />
    </Router>
  </RootWrapper>
);

export default App;
