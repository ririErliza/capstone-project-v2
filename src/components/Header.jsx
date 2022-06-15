import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import hero from '../img/hero.png';
import leaf from '../img/leaf.png';
import Typed from 'react-typed'


const Header = () => {
  return (

    <section id="header-wrapper">
        <Container >
            <Row >
                
                <Col xs={12} md={6}>
                        <p className="header-title"> Donate your shoes wastes </p>
                        <h3> and join us in less waste action</h3>
                            <div className='typed-section'>

                                <h4>
                                    <Typed
                                    className='typed-text'
                                    strings={["for our environment", "for our planet", "for us"]}
                                    typeSpeed={30}
                                    backSpeed={20}
                                    loop
                                    >   
                                    </Typed>
                                </h4> 
                                    
                            </div>
                        
                            <Button size="lg" className="mr-5 mt-5 button-volunteer mb-1 mb-sm-0">Volunteer</Button>
                            <Button size="lg" className="mt-5 text-white button-donate mb-1 mb-sm-0">Donate</Button>
                        
                    
                    
                </Col>
                <Col xs={12} md={6} className="text-center">
                    <img
                    src={hero}
                    width="450"
                    height="auto"
                    className="image-hero img-fluid pb-3"
                    alt="shoes"
                    />
                </Col>
                <div className='main-area'>
                <div className='circles'>
                    <div> <img width="30" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="20" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="40" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="30" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="50" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="20" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="40" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="20" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="30" height="auto"src={leaf} alt="leaf" /> </div>
                    <div> <img width="50" height="auto"src={leaf} alt="leaf" /> </div>
                    
                </div>
            </div>
            </Row>
        </Container>
        <div class="custom-shape-divider-bottom-1655289917">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
        </section>
  )
}

export default Header