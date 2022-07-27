import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Cart = () => {
  return (
    <section id="shop-wrapper">
        

  
        <Container fluid className=" text-green px-5 py-5">
       
        <h1 className='pt-4 text-center'>Shopping Cart</h1>
            <Row className='justify-content-md-center pt-5'>
               
            <div class="card mb-3" style={{ maxWidth: '540' }}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                    <img src="..." alt="..." />
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
            
                   
        
    
            </Row>
        </Container>
        </section>
  )
}

export default Cart