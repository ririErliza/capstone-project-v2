import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs from './pages/AboutUs';
import DonationForm from './pages/DonationForm';
import VolunteerForm from './pages/VolunteerForm';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import AddressList from './components/AddressList';
import Success from './pages/Success';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
//import Cart from './pages/Cart';





function App() {
  

  return (
    <Router>

        <CustomNavbar />

      
      <Switch>
          <Route path="/" component={<Home />} />
          <Route path="/aboutUs" component={<AboutUs />}/>
          <Route path="/donationForm" component={<DonationForm />}  />
          <Route path="/volunteerForm" component={<VolunteerForm />}   />
          <Route path="/contactus" component={<ContactUs />}   />
          <Route path="/addresslist" component={<AddressList />} />
          <Route path="/shop" component={<Shop />} />
          <Route path="/cart" component={<Cart />} />
          <Route path="/success" component={<Success />} />
          <Route path="*" component={<NotFound/>}  />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
