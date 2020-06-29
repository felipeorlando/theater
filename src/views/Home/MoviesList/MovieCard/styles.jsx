import { Link } from '@reach/router';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Content = styled.div`
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.3, theme.accent)};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0;
  padding: 15px;
  position: absolute;
  width: 100%;
  transition: opacity 0.2s ease-in-out;
`;

export const Card = styled(Link)`
  background-color: ${({ theme }) => theme.accent};
  display: flex;
  position: relative;
  width: 100%;

  &:hover {
    & ${Content} {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.light};
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

export const Year = styled.span`
  color: ${({ theme }) => theme.light};
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  margin-top: 10px;
`;
