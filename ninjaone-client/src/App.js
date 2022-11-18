import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss';
import router from './router';

const AppContainer = styled.div`
  text-align: center;
  header {
    padding: 25px 0;
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 25px;
    text-transform: uppercase;
    color: var(--color-text-primary);

    span {
      font-weight: bold;
    }
  }
  section {
    margin: 25px;
    @media (min-width: var(--breakpoint-md)) {
      margin: 10px 50px;
    }
  }
`;

function App() {
  return (
    <AppContainer className="App">
      <header>
        <span>Ninja One</span> | Devices<br />
      </header>
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;
