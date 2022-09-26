import React, {useState, useEffect} from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import {useDispatch} from 'react-redux';
import {updateCartItem, removeFromCart} from '../redux/actions';

function CardItem(props) {
    const [qty, setQty] = useState(props.qty)
    const [price, setPrice] = useState(props.qty*props.price)
    const [newPrice, setNewPrice] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=> {
        setQty(props.qty)
        if(props.offers.length ){
            let exist = props.offers.find((el)=> el.id === props.id)
            if(exist) {
                setPrice(exist.price)
                setNewPrice(exist.newPrice)
            }else {
                setPrice(props.qty*props.price)
                setNewPrice(0)
            }
        }else {
            setPrice(props.qty*props.price)
            setNewPrice(0)
        }
    },[props.qty, props.offers])

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
                <p style = { newPrice
                            ? {textDecoration: 'line-through', color:'red', marginTop:'20px'} 
                            : { marginTop:'20px'}}>
                    £{price.toFixed(2)}
                </p>
                {newPrice 
                ? <p style={{marginTop: '-15px'}}> £{newPrice.toFixed(2)} </p> 
                : ''} 
            </Col>
        </Row>
    </Container>
  )
}

export default CardItem