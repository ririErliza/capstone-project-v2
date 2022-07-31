import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Cart from '../components/Cart';


const PaymentSummary = () => {

  return (
    <section className="about-wrapper">

  
    <Container className=" text-green px-5 py-5">
    <Card>
      <Card.Header>Please check your data below</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Cart/>
      </Card.Body>
    </Card>
    </Container>
    </section>
  )
}

export default PaymentSummary