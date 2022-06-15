import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import AboutUs from './components/AboutUs';
import CustomNavbar from './components/CustomNavbar';
import Header from './components/Header';
import Why from './components/Why';
import How from './components/How';
import DropPoints from './components/DropPoints';
import What from './components/What';
import OurPartner from './components/OurPartner';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <CustomNavbar />
      <Header />
      <How />
      <Why />
      <What />
      <DropPoints />
      <OurPartner />
      <ContactUs />
      <Footer />
      
    </div>
  );
}

export default App;
