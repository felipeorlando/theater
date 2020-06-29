import React, { useContext } from 'react';

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
    <Header
      title="Your favourite movies. Explained."
      subtitle="Figure out what happened. Then find out why."
    >
      <S.SearchInput
        onChange={searchInputChangeHandler}
        placeholder="Search for a movie..."
        value={store.search.term}
      />
    </Header>
  );
};

export default React.memo(Hero);
