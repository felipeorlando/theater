import PropTypes from 'prop-types';
import React from 'react';

import Container from 'ui/components/Container';
import * as S from './styles';
import routes from 'routes';

const Header = ({ children, cover, subtitle, title }) => (
  <S.Header style={{ backgroundImage: `url(${cover})` }}>
    <S.Navbar>
      <S.Logo to={routes.home}>
        theater
      </S.Logo>
    </S.Navbar>

    <Container>
      <S.Content>
        <S.Title>{ title }</S.Title>
        <S.Subtitle>{ subtitle }</S.Subtitle>

        { children }
      </S.Content>
    </Container>
  </S.Header>
);

Header.propTypes = {
  cover: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default React.memo(Header);
