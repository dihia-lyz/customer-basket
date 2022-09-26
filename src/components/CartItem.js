import React, {useState, useEffect} from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import {useDispatch} from 'react-redux';
import {updateCartItem, removeFromCart} from '../redux/actions';

function CardItem(props) {
    const [qty, setQty] = useState(props.qty)
    const dispatch = useDispatch()

    useEffect(()=> {
        setQty(props.qty)
    },[props.qty])

    const decreaseQtyHandler = (id) => {
        if(qty-1===0) dispatch(removeFromCart(id))
        else (dispatch(updateCartItem(id,qty-1)))
    }

     const increaseQtyHandler = (id) => {
       dispatch(updateCartItem(id,qty+1))
    }

  return (
    <Container>
        <Row  className='w-100 mb-3 cart-row'>
            <Col xs="4" md='4' className='overflow-hidden h-100'>
                <div className = 'circle overflow-hidden h-100'>
                    <img src={'/images/'+props.image} />
                </div>
            </Col>
            <Col xs="5" md='5' className='px-1'>
                <h4 style={{fontSize:'.9rem'}} className='mb-4'>{props.name}</h4>
                <div className='w-100 d-inline-flex justify-content-between' >
                    <span> Quantity </span>
                    <div className='d-inline-flex justify-content-around qty-container'>
                        <Button 
                            outline  
                            className='btn-soust'
                            onClick={() => decreaseQtyHandler(props.id)}
                        > - </Button>
                        <span className='mt-1'>{qty}</span>
                        <Button 
                            outline  
                            className='btn-add'
                            onClick={() => increaseQtyHandler(props.id)}
                        > + </Button>
                    </div>
                </div>
            </Col>
            <Col xs="3" md='3' className='price'>
                <p style = {props.newPrice && props.id ==='1' 
                        ? {textDecoration: 'line-through', color:'red', marginTop:'20px'} 
                        : { marginTop:'20px'}}>
                    £{props.price}
                </p>
                { props.newPrice && props.id ==='1' && <p style={{marginTop: '-15px'}}>
                    £{props.oldPrice}
                </p>}
            </Col>
        </Row>
    </Container>
  )
}

export default CardItem