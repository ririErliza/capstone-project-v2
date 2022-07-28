import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './pages/AboutUs';
import DonationForm from './pages/DonationForm';
import VolunteerForm from './pages/VolunteerForm';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import AddressList from './components/AddressList';
import Success from './pages/Success';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";






function App() {
  

  return (
    <Router>
        <ToastContainer />
        <CustomNavbar />

      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />}/>
          <Route path="/donationForm" element={<DonationForm />}  />
          <Route path="/volunteerForm" element={<VolunteerForm />}   />
          <Route path="/contactus" element={<ContactUs />}   />
          <Route path="/addresslist" element={<AddressList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />}  />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
