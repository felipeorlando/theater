import styled from 'styled-components';

import { measures, rules } from 'ui/breakpoints';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  @media ${rules.md} {
    max-width: ${measures.md}px;
  }

  @media ${rules.lg} {
    max-width: ${measures.lg}px;
  }
`;
