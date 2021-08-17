import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { ListTripPage } from './Pages/ListTripPage';
import { ApplicationFormPage } from './Pages/ApplicationFormPage';
import { LoginPage } from './Pages/LoginPage';
import { AdminHomePage } from './Pages/AdminHomePage';
import { CreateTripPage } from './Pages/CreateTripPage';
import { TripDetailsPage } from './Pages/TripDetailsPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <hr />
      <ListTripPage />
      <hr />
      <ApplicationFormPage />
      <hr/>
      <LoginPage />
      <hr/>
      <AdminHomePage />
      <hr/>
      <CreateTripPage />
      <hr/>
      <TripDetailsPage />
    </div>
  );
}

export default App;
