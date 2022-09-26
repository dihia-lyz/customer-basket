import React from 'react'
import ProductItem from './ProductItem'
import { Row, Col } from 'reactstrap'
import {data} from '../data/data'

function Products() {
    
  return (
    <>
    <Col xs="12" md="6" className = 'px-5'>
      <h2 className="mb-4">Products</h2>
      <Row>
          {data && data.map((prod, i)=> 
          { return (
              <ProductItem 
                  key = {i}
                  id = {prod.id}
                  name = {prod.name}
                  description = {prod.description}
                  image = {prod.image}
                  rating = {prod.rating}
                  price = {prod.price}
                  oldPrice = {prod.oldPrice}
              />
          )}
          )}
      </Row>
    </Col>
    </>
  )
}

export default Products