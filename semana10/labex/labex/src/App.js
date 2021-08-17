import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { ListTripPage } from './Pages/ListTripPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <hr />
      <ListTripPage />
      <hr />
    </div>
  );
}

export default App;
