import React from 'react'
import { Badge, Button, Nav} from 'react-bootstrap'
import { BsCartFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const NavShop = () => {

  const navigate = useNavigate()

  return (
    <div id="navshop">
    
    <Nav className="justify-content-end">
  
    <Nav.Item>

      <Button onClick={() => navigate('/cart')} className='btn btn-light rounded-circle'><BsCartFill style={{ fontSize:'2.3em', color:'#02B699' }}/></Button>
      <Badge className='badge badge-danger rounded-circle' id="badge-number"> 1 </Badge>
    
    </Nav.Item>
  
  </Nav>
  </div>
  )
}

export default NavShop