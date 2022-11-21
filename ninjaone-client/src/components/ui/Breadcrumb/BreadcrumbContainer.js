import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  margin-bottom: 25px;
  padding: 25px 0;
  background-color: var(--color-overlay-darker);
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0 10px;
    }
    a {
      text-transform: uppercase;
      text-decoration: none;
    }
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export default BreadcrumbContainer;