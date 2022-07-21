import React from 'react'
import { Badge, Nav} from 'react-bootstrap'
import { BsCartFill } from "react-icons/bs"

const NavShop = () => {

  return (
    <div><Nav className="justify-content-end" activeKey="/home">
  
    <Nav.Item>

      <div type='button'><BsCartFill style={{ fontSize:'2.4em', color:'#02B699' }}/><Badge id="badge-number"> 1 </Badge></div>
    
    </Nav.Item>
  
  </Nav></div>
  )
}

export default NavShop