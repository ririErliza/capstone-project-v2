import React from 'react'
import { Button, Card } from 'react-bootstrap'


const SingleProduct = ({handleSelected,product}) => {
    
  return (
    <>
        <Card>
          <Card.Img variant='top' src={product.img} className='imageProduct'  onClick={() => handleSelected(product.id)}/>
          <Card.Body>
            <Card.Title className="text-truncate" style={{ color: 'black' }}>
              {product.title}
             
            </Card.Title>
          
            <Button>Add to Cart</Button>
          
          </Card.Body>
        </Card>
      </>
  )
}

export default SingleProduct