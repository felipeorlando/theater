import React from 'react';

import Container from 'ui/components/Container';
import * as S from './styles';

const Hero = () => (
  <S.Hero>
    <S.Header>
      theater
    </S.Header>

    <Container>
      <S.Content>
        <S.Title>Your favourite movies. Explained.</S.Title>
        <S.Subtitle>Figure out what happened. Then find out why.</S.Subtitle>

        <S.SearchInput placeholder="Search for a movie..." />
      </S.Content>
    </Container>
  </S.Hero>
);

export default React.memo(Hero);
