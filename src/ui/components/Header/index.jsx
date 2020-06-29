import React from 'react';

import * as S from './styles';

const Header = ({ children }) => (
  <S.Header>
    <S.Navbar>
      theater
    </S.Navbar>

    { children }
  </S.Header>
);

export default React.memo(Header);
