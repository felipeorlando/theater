import styled from 'styled-components';

import { rules } from 'ui/breakpoints';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const List = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;

  @media ${rules.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.dark};
  font-size: 2rem;
  font-weight: 600;
`;

export const Wall = styled.section`
  display: flex;
  flex-direction: column;
  padding: 45px 0;
`;
