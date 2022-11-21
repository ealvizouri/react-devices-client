import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss';
import router from './router';

const AppContainer = styled.div`
  text-align: center;
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 25px;
    color: var(--color-text-primary);
    img {
      height: 50px;
    }
    span {
      text-transform: uppercase;
      font-weight: bold;
      color: var(--color-text-secondary);
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
        <img src="https://i.imgur.com/8HVFoox.png" alt="ninjaOne" />
        <span>Devices</span>
      </header>
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;
