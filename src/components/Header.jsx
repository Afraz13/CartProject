import React from 'react'
import { Badge, Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';


function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);
  const cart=useSelector((state)=>state.cartReducer)
  console.log(cart); 
  return (

          <Navbar>
              <Container>
                <Nav className="ms-auto">
                <Nav.Link className='btn border border-secondary rounded'> <Link style={{textDecoration:'none',color:'white'}} to={'/cart'}>Cart  <Badge>{cart.length} </Badge></Link></Nav.Link>
                <Nav.Link className='btn border border-secondary rounded ms-3' > <Link style={{textDecoration:'none',color:'white'}}  to={'/wishlist'}>Wishlist<Badge>{wishlist.length} </Badge></Link></Nav.Link>
                </Nav>
              </Container>
            
          </Navbar>
    
  )
}

export default Header