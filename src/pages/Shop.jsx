import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavShop from '../components/NavShop'
import SingleProduct from '../components/SingleProduct'

const Shop = () => {
const products= [
    {id:1, name:'T-shirt', description: 'Variant colors', price:'$15'},
    {id:2, name:'Shopping Bag', description: 'Variant colors', price:'$10'},
    {id:3, name:'T-shirt', description: 'Variant colors', price:'$15'},
    {id:4, name:'Shopping Bag', description: 'Variant colors', price:'$10'},
    {id:5, name:'T-shirt', description: 'Variant colors', price:'$15'},
    {id:6, name:'Shopping Bag', description: 'Variant colors', price:'$10'},
    {id:7, name:'T-shirt', description: 'Variant colors', price:'$15'},
    {id:8, name:'Shopping Bag', description: 'Variant colors', price:'$10'},
]
    
  return (
    <section id="shop-wrapper">
        

  
        <Container fluid className=" text-green px-5 py-5">
        <NavShop/>
        <h1 className='pt-4 text-center'>Available Merchandise</h1>
            <Row className='justify-content-md-center pt-5'>
                {products.map((product)=>(
                <Col xs={6} md={3} className="mb-3" key={product.id}>
            <SingleProduct product={product}/>
            </Col>))}
            
                   
                
    
        </Row>
        </Container>
        </section>
  )
}

export default Shop