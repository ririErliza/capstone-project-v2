import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaLinkedin} from "react-icons/fa";
import { useLayoutEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0,0)
})

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template1', form.current, 'HmZUwb2_em0hFDGw7')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent!')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



  return (
    <section className="contact-wrapper">
          <Container className='px-5 py-5'>

            <div id="cu-background"></div>

            <h1 className='title-section text-center text-green pb-5'>Contact Us</h1>

            <Row >
              <Col xs={12} md={12} className="text-green center-div text-center">
                  
                  <div className="form-cu">
                  <Form ref={form} onSubmit={sendEmail} className='mx-4 my-4'>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="visitor_name" className="w-100" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" name="visitor_email" className="w-100"
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={3} className="w-100"/>
                      </Form.Group>
                </Form>

                <Button type="submit" value="Send" className="button-contact mb-1 mb-sm-0 mx-5 my-4">Send</Button>
              
                  </div>
                
              </Col>

              <Col xs={12} md={12} className="text-green d-flex justify-content-center pt-5">
            
                <div className='mr-2'> <FaFacebookSquare color='#087776' size='4rem'/> </div>
                <div className='mr-2'> <FaInstagramSquare color='#087776' size='4rem'/></div>
                <div className='mr-2'> <FaLinkedin color='#087776' size='4rem'/> </div>
                <div className='mr-2'> <FaWhatsappSquare color='#087776' size='4rem'/> </div>
                
              </Col>

             
            </Row>
      </Container>
    </section>
  )
}

export default ContactUs