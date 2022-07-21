import React from 'react'
import { Badge, Button, Nav} from 'react-bootstrap'
import { BsCartFill } from "react-icons/bs"

const NavShop = () => {

  return (
    <div><Nav className="justify-content-end" activeKey="/home">
  
    <Nav.Item>

      <Button className='btn btn-light rounded-circle'><BsCartFill style={{ fontSize:'2.3em' }}/></Button>
      <Badge className='badge badge-danger rounded-circle' id="badge-number"> 1 </Badge>
    
    </Nav.Item>
  
  </Nav></div>
  )
}

export default NavShop