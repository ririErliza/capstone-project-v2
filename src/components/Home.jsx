import React from 'react';
import ContactUs from './ContactUs';
import DropPoints from './DropPoints';
import Header from './Header';
import How from './How';
import OurPartner from './OurPartner';
import What from './What';
import Why from './Why';


const Home = () => {
  return (
    <>
    <Header />
      <How />
      <Why />
      <What />
      <DropPoints />
      <OurPartner />
      <ContactUs />
    </>
  )
}

export default Home