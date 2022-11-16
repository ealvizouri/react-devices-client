import styled from 'styled-components';

const SpinnerContainer = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  svg {
    animation: 900ms linear 0s infinite spin;
  }
`;

export default SpinnerContainer;