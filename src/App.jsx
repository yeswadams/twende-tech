import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/authPage';
import Results from './pages/results';
import Navbar from './components/navbar'; // Assuming your Navbar component is here

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Main;
