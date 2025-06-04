import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/authPage';
import Results from './pages/results';
import Navbar from './components/navbar';
import About from './pages/aboutPage';
import Programs from './pages/programsPage';
import Volunteer from './pages/volunteerPage';
import Partnership from './pages/partnershipPage';
import Quiz from './pages/quiz';

 // Assuming your Navbar component is here

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/partnerships" element={<Partnership />} />
        <Route path="/quiz" element={<Quiz />} />
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
