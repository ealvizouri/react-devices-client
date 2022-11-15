import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Ninja Devices Client Test<br />
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
