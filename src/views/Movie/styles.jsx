import styled from 'styled-components';
import { rules } from 'ui/breakpoints';

export const Content = styled.p`
  padding-top: 30px;

  @media ${rules.md} {
    margin-top: 0;
    margin-left: 30px;
  }
`;

export const Description = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.gray};
  margin: 0;
  margin-top: 15px;
`;

export const Overview = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-bottom: 60px;

  @media ${rules.md} {
    align-items: flex-start;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const Poster = styled.img`
  width: 300px;
  max-width: 100%;

  @media ${rules.md} {
    margin-top: -60px;
    z-index: 1;
  }
`;

export const Summary = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.gray};
  margin: 0;
  margin-top: 15px;
`;
