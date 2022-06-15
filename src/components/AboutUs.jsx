import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
        <Container fluid className="about-wrapper">
            <Row>
                <Col xs={6} md={6} className="about-title">
                    <h1 className='pt-4'>About Us</h1>
    

                </Col>
                <Col xs={6} md={6} className="about-text">
                  
                    <div>
                      <p className="pt-4">We are a group of people with the same goal to create less waste on our planet, <br></br>we believe that even the smallest action can really give great impact to our environment.</p>
                      <p>read more about us here...</p>
                    </div>

                </Col>
            </Row>
            <div class="custom-shape-divider-top-1654965378">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
        </Container>
  )
}

export default AboutUs