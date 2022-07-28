
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Cart from '../components/Cart';
//import { MdAddShoppingCart } from "react-icons/md";



const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/products"
          );
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, []);


    
  return (
    <section id="shop-wrapper">
        

  
        <Container fluid className=" text-green px-5 py-5">
        <h1 className='pt-4 text-center'>Available Merchandise</h1>
      
          <Row className='justify-content-md-center pt-5'>
            <Col md={7}>
              <Row>
            {products.map((product)=>(
                <Col xs={6} md={3} className="mb-3" key={product._id}>
                    <Card>
                    <Card.Img variant='top' src={product.img} className='imageProduct' />
                    <Card.Body>
                        <Card.Title className="text-truncate" style={{ color: 'black' }}>
                        {product.title}
                        
                        </Card.Title>
                        <Card.Text>
                        {product.desc}
                        </Card.Text>
                        <Card.Text className='h4'>
                        ${product.price}
                        </Card.Text>
                    
                    
                        {/* <Button  onClick={() => handleAddToCart(product)} className='btn btn-secondary btn-sm float-right'> 
                            <MdAddShoppingCart style={{ fontSize:'1.5em' }}/> 
                        </Button> */}
            
                        
                    
                    </Card.Body>
                    </Card>
            </Col>))}
            </Row>
          </Col>
          <Col md={5}>
            <Row>
            <Cart/>
            </Row>
          </Col>
                
            
                   
                
    
        </Row>
        

            
        </Container>
        </section>
  )
}

export default Shop