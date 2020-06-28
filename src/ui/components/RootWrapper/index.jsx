import React from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import StyledGlobal from 'ui/styles/global';
import theme from 'ui/theme';
import PageHeaders from './PageHeaders';

const RootWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <StyledGlobal />
    <PageHeaders />

    {children}
  </ThemeProvider>
);

export default React.memo(RootWrapper);
