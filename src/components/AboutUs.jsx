import {useLayoutEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import teams from './teamsPictures.json';
import timeline from '../img/reviver-timeline.png';
import founders from '../img/founders.png';

const AboutUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
})
  return (
    <section className="about-wrapper">

  
        <Container className=" text-green px-5">
            <Row className='justify-content-md-center pt-5'>
            
                <Col xs={6} md={7} className="about-title px-4 ">
                    <h1 className='pt-4'>About Us</h1>
                    <p className="pt-4">We are a group of people with the same goal to create sustainable life, we believe that even the smallest action can really give great impact to our environment.</p>
    

                </Col>

                <Col xs={6} md={5} className="about-text">
                  
                  <img
                      src={founders}
                      width="300"
                      height="auto"
                      className=" img-fluid "
                      alt="indonesian man"
                      />
  
                  </Col>
                
            </Row>
            <h1 className='title-section text-center py-5'>Our Journey</h1>
            <Row className='center-div timeline'>
            <img
                    src={timeline}
                    width="700"
                    height="auto"
                    className=" img-fluid "
                    alt="timeline"
                    />
            </Row>
            <h1 className='title-section text-center  py-5'>Our Team</h1>
        <Row className='text-center'>
        
        
           {teams.map((teamMember) => (
            <Col xs={6} md={3} >
              <div key={teamMember.id}>
                <img
                    src={teamMember.image}
                    width="150"
                    height="1500"
                    className="img-fluid"
                    alt="teamMember"
                    />
                    <p>{teamMember.name}</p>
            </div>
            </Col>
           ))}
            
           
            
        </Row>
        </Container>
        </section>
  )
}

export default AboutUs