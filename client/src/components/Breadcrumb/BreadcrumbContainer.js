import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  margin-bottom: 25px;
  padding: 25px 0;
  background-color: var(--color-overlay-darker);
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-transform: uppercase;
    text-decoration: none;
  }
  a:not(:last-child), svg {
    margin-right: 10px;
  }
  span {
    font-weight: bold;
  }
`;

export default BreadcrumbContainer;