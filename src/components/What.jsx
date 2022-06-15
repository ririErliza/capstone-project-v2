import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import { GiWaterDrop, GiSpatter, GiBootPrints} from "react-icons/gi";


const What = () => {
  return (
    <section id="what-wrapper">
    <Container className='px-5'>

    <h1 className='title-section text-center text-green pb-5'>What to donate</h1>
    <p className='text-center'> Basically we accept all kinds of shoes wastes, but to make the delivery goes smoothly we advice you to NOT send : </p>
    <Row className='text-center'>
   
<Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          Shoes that splattered by oil
        </Card.Text>
      </Card.Body>
    </Card>
</Col>

<Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          Wet shoes
        </Card.Text>
      </Card.Body>
    </Card>
</Col>

<Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
          Shoes has mud covering part of it
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
  

        

    

        
    </Row>
    
    



</Container>

</section>
  )
}

export default What