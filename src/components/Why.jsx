import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import shoes from '../img/shoes2.png';


const Why = () => {
  return (
    <section className='why-wrapper'>
    <Container>
          
        <h1 className='title-section text-center text-green pb-5'>Why?</h1>
        
        <Row>
      
            <Col xs={12} md={12} className='text-center pt-3'>
            
            <img
                    src={shoes}
                    width="850"
                    height="auto"
                    className="image-shoes2 img-fluid"
                    alt="shoes"
                    />
            </Col>
        </Row>
     
            
    </Container>
    </section>
  )
}

export default Why