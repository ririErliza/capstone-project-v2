
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from "../Redux/productsAPI";
import { addToCart } from "../Redux/cartSlice";
import { useHistory } from 'react-router-dom';


const Shop = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

    
  return (
    <section id="shop-wrapper">
        

  
        <Container fluid className=" text-green px-5 py-5">
        <h1 className='pt-4 text-center'>Available Merchandise</h1>
        {isLoading? (<p>Loading...</p>) : error? (<p>Oops an error occured</p>): (<>
          <Row className='justify-content-md-center pt-5'>
                {data.map((product)=>(
                <Col xs={6} md={2} className="mb-3" key={product._id}>
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
                    
                    
                        <Button  onClick={() => handleAddToCart(product)} className='btn btn-secondary btn-sm float-right'> 
                            <MdAddShoppingCart style={{ fontSize:'1.5em' }}/> 
                        </Button>
            
                        
                    
                    </Card.Body>
                    </Card>
            </Col>))}
            
                   
                
    
        </Row>
        
        
        </>)}
            
        </Container>
        </section>
  )
}

export default Shop