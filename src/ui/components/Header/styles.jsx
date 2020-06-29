import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  justify-content: center;
  text-transform: lowercase;
  width: 100%;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.light};
  padding: 30px 0;
  width: 100%;
`;
