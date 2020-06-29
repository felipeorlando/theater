import styled from 'styled-components';

import { rules } from 'ui/breakpoints';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 0;
`;

export const SearchInput = styled.input`
  border-radius: 30px;
  border: 0;
  margin: 30px auto 0;
  max-width: 240px;
  outline: none;
  padding: 15px;
  text-align: center;
  width: 100%;
`;

export const Subtitle = styled.h2`
  color: inherit;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 10px;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: inherit;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  width: 100%;

  @media ${rules.md} {
    font-size: 4rem;
  }
`;
