import styled, { css } from 'styled-components';

import { ReactComponent as StarIcon } from 'assets/star.svg';

export const Icon = styled(StarIcon)`
  width: 16px;
  color: ${({ theme }) => theme.gray};
`;

export const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  outline: none;
  padding: 0;
  transition: transform 0.2s ease-in-out;

  &:not(:first-child) {
    margin-left: 4px;
  }

  &:hover {
    transform: scale(1.2);
  }

  ${({ isSelected, theme }) => isSelected && css`
    & ${Icon} {
      color: ${theme.star};
    }
  `}
`;
