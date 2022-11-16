import styled from 'styled-components';

const Button = styled.button`
  margin: 2px;
  border: 0;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;

  span {
    margin-right: 5px;
  }

  ${({ variant = 'primary' }) => `
    background-color: var(--color-${variant});
    color: var(--color-${variant === 'clean' ? 'info' : 'clean'});
  `}

  &:disabled {
    background-color: var(--color-secondary-darker) !important;
    cursor: not-allowed !important;
  }

  &:hover, &:focus {
    ${({ variant = 'primary' }) => `background-color: var(--color-${variant}-darker`});
  }
`;

export default Button;