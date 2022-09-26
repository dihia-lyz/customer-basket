import React from 'react'
import {Card, CardBody, Row, Col} from 'reactstrap'
import {useDispatch} from 'react-redux';
import { addToCart } from "../redux/actions";

function ProductCard(props) {
  const dispatch =useDispatch();

  return (
    <Card className='d-block w-100 mb-3 card-container' >
        <CardBody className='h-100 card-body'>
            <Row className='mb-1 h-100'>
                <Col xs='4' className='h-100 overflow-hidden'>
                    <img src={'/images/'+props.image} />
                </Col>
                <Col xs='5' className='px-1'>
                    <div >
                      <h4 className='mb-1 price'>{ props.name }</h4>
                      <p className='text-muted description'>
                          { props.description.substring(0,70) }
                      </p>
                    </div>
                </Col>
                <Col xs='3' className='h-100 overflow-hidden'>
                    <img src={'/images/'+props.rating} style={{marginTop: '-8px'}}/>
                    <p className = 'price'>£{props.price}</p>
                </Col>
                <div className='w-100' style={{zIndex:'9'}}>
                    <button 
                        type='button' 
                        className='btn btn-primary float-right p-1 btn-addcart' 
                        onClick={()=> dispatch(addToCart(props)) }
                    >
                      Add To Cart
                    </button>
                </div>
            </Row>
       </CardBody>
    </Card>
  )
}

export default ProductCard