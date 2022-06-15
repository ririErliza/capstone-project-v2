import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <section className="contact-wrapper">
    <Container className='px-5'>

<h1 className='title-section text-center text-green pb-5'>Contact Us</h1>
    <Row>
        <Col xs={12} md={8} >
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    
        </Col>

        <Col xs={12} md={4} >
            
    
        </Col>

        

        
    </Row>
    

</Container>
</section>
  )
}

export default ContactUs