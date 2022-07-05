import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare, FaLinkedin} from "react-icons/fa";
import { useLayoutEffect} from 'react'

const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
})
  return (
    <section className="contact-wrapper">
          <Container className='px-5'>

            <div id="cu-background"></div>

            <h1 className='title-section text-center text-green pb-5'>Contact Us</h1>

            <Row >
              <Col xs={12} md={12} className="text-green center-div text-center">
                  
                  <div className="form-cu">
                  <Form className='mx-4 my-4'>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" className="w-100"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" className="w-100"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3} className="w-100" />
                  </Form.Group>
                </Form>

                <Button className="button-contact mb-1 mb-sm-0 mx-5 my-4">Send</Button>
              
                  </div>
                
              </Col>

              <Col xs={12} md={12} className="text-green d-flex justify-content-center pt-5">
            
                <div className='mr-2'> <FaFacebookSquare color='#087776' size='4rem'/> </div>
                <div className='mr-2'> <FaInstagramSquare color='#087776' size='4rem'/></div>
                <div className='mr-2'> <FaLinkedin color='#087776' size='4rem'/> </div>
                <div className='mr-2'> <FaWhatsappSquare color='#087776' size='4rem'/> </div>
                
              </Col>

                {/* <Col xs={12} md={5}>
                <ul id="social-buttons" className="py-3 px-3">
                    <li className='pb-3'> <FaFacebookSquare color='#087776' size='3rem'/> </li>
                    <li className='pb-3'> <FaInstagramSquare color='#087776' size='3rem'/></li>
                    <li className='pb-3'> <MdEmail color='#087776' size='3rem'/> </li>
                    <li className='pb-3'> <FaWhatsappSquare color='#087776' size='3rem'/> </li>
                  </ul>
                </Col> */}

             
            </Row>
      </Container>
    </section>
  )
}

export default ContactUs