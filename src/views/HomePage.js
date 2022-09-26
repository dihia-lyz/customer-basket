import React , {useEffect} from 'react'
import {Container, Row, Col} from 'reactstrap'
import Products from '../components/Products'
import Cart from '../components/Cart'

function HomePage() {

  return (
    <Container className="p-5">
        <Row>
            <Products/>
            <Cart/> 
        </Row>
    </Container>
  )
}

export default HomePage