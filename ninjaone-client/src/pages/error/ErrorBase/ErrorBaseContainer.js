import styled from 'styled-components';

const ErrorBaseContainer = styled.div`
  padding-top: 150px;
  h3 {
    font-size: 75px;
    color: var(--color-primary);
  }
  p {
    margin-bottom: 30px;
    font-size: 23px;
    color: var(--color-secondary);
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
  }
`;

export default ErrorBaseContainer;