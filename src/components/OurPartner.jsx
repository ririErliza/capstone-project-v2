import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logos from './partnersLogo.json';


const OurPartner = () => {
  return (
     <section className="op-wrapper">
    <Container >
        

        <h1 className='title-section text-center text-green pb-5'>Our Partners</h1>
        <Row>
        
           {logos.map((logo) => (
            <Col xs={4} md={2} >
              <div key={logo.id}>
                <img
                    src={logo.image}
                    width="300"
                    height="300"
                    className="img-fluid"
                    alt="partners logo"
                    />
            </div>
            </Col>
           ))}
            
           
            
        </Row>
       


            
    </Container>
    </section>
  )
}

export default OurPartner