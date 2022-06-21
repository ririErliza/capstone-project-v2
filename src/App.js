import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import DonationForm from './components/DonationForm';
import VolunteerForm from './components/VolunteerForm';
import NotFound from './components/NotFound';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>

        <CustomNavbar />

      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />}/>
          <Route path="/donationForm" element={<DonationForm />}  />
          <Route path="/volunteerForm" element={<VolunteerForm />}   />
          <Route path="*" component={NotFound}  />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
