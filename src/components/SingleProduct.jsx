import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {MdAddShoppingCart} from "react-icons/md"



const SingleProduct = ({product, onAddToCart}) => {
    
    
  return (
    <>
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
          
            <Button onClick={onAddToCart} className='btn btn-secondary btn-sm float-right'> 
                <MdAddShoppingCart style={{ fontSize:'1.5em' }}/> 
            </Button>
          
          </Card.Body>
        </Card>
      </>
  )
}

export default SingleProduct