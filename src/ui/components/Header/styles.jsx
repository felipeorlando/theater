import styled from 'styled-components';

import { rules } from 'ui/breakpoints';
import { Link } from '@reach/router';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
  position: relative;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.accent};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.light};
  padding: 30px 0;
  position: relative;
  width: 100%;

  &:before {
    background-color: ${({ theme }) => theme.accent};
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0.8;
  }
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.light};
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  justify-content: center;
  position: relative;
  text-transform: lowercase;
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

