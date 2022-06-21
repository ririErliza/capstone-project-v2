import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './components/AboutUs';
import DonationForm from './pages/DonationForm';
import VolunteerForm from './pages/VolunteerForm';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import How from './components/How';
// import Why from './components/Why';
// import DropPoints from './components/DropPoints';
import ContactUs from './components/ContactUs';




function App() {
  return (
    <Router>

        <CustomNavbar />

      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />}/>
          <Route path="/donationForm" element={<DonationForm />}  />
          <Route path="/volunteerForm" element={<VolunteerForm />}   />
          {/* <Route path="/howto" element={<How />}   />
          <Route path="/why" element={<Why />}   />
          <Route path="/droppoints" element={<DropPoints />}   /> */}
          <Route path="/contactus" element={<ContactUs />}   />
          <Route path="*" component={NotFound}  />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
