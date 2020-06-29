import React, { useContext } from 'react';

import Container from 'ui/components/Container';
import Header from 'ui/components/Header';
import * as S from './styles';
import Context from '../context';

const Hero = () => {
  const { store, setStore } = useContext(Context);

  const searchInputChangeHandler = (e) => {
    const { value } = e.target;

    setStore((prevStore) => ({
      ...prevStore,
      search: {
        term: value,
      },
      status: value ? 'loading' : 'loaded',
    }));
  };

  return (
    <Header>
      <Container>
        <S.Content>
          <S.Title>Your favourite movies. Explained.</S.Title>
          <S.Subtitle>Figure out what happened. Then find out why.</S.Subtitle>

          <S.SearchInput
            onChange={searchInputChangeHandler}
            placeholder="Search for a movie..."
            value={store.search.term}
          />
        </S.Content>
      </Container>
    </Header>
  );
};

export default React.memo(Hero);
