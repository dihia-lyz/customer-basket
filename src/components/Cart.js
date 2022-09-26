import React , {useState, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import {useSelector,useDispatch} from 'react-redux';
import CartItem from './CartItem';
import {offers} from '../data/data'

let offers_list = []
function Cart() {
    const cart = useSelector((state) => state.cartItems);
    const [cartItems ,setCartItems]=useState([])

    const [subtotal, setSubtotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(async()=> {

        offers_list = []
        setCartItems(cart.cartItems)
        getTotal()
    })

    const getTotal = () => {
        let sub_total = 0
        let dis_count = 0
        cartItems && cartItems.map((x)=> {
            sub_total = sub_total + x.qty * x.price
            setSubtotal(sub_total)

            let offer = offers.find((of)=> of.id_2 === x.id)
            if(offer && offer.id === 'of2') {
                let nb_free = parseInt(x.qty/offer.qty_1)
                dis_count = dis_count + x.price * nb_free
                if(x.qty>=offer.qty_1)
                    offers_list.push({id:'2',price:x.qty * x.price, newPrice : (x.qty-nb_free)*x.price})
            }else {
                if(offer && offer.id === 'of1') {
                    let prod1 = cartItems && cartItems.find((el)=> el.id === offer.id_1)
                    if(prod1 && prod1.qty >= offer.qty_1) {
                        let new_price = offer.remise * x.price /100
                        let qty_discount1 = parseInt(prod1.qty/2)
                        if(x.qty <= qty_discount1) {
                            dis_count = dis_count + x.qty* new_price
                            offers_list.push({id:'1', price:x.qty * x.price, newPrice : x.qty * x.price - (x.qty* new_price)})
                        } 
                        else {
                            dis_count = dis_count + (qty_discount1 * new_price)
                            offers_list.push({id:'1', price:x.qty * x.price, newPrice : x.qty * x.price - (qty_discount1* new_price)})
                        }
                    }
                }
            } 
            setDiscount(dis_count)
            setTotal(sub_total - dis_count)
    })
    if(!cartItems.length){
        setDiscount(0)
        setTotal(0)
        setSubtotal(0)
        offers_list = []
    }
}

  return (
    <>
    <Col xs="12" md="6" className='cart-container'>
        <h2 className="mb-4 d-inline-block"> Cart </h2>
        <div className='d-inline-block pl-3'>
            <i className="fa fa-shopping-cart icon"></i>
        </div>
        {cartItems.length 
            ? cartItems.map((item, i)=> 
                { return (
                    <CartItem 
                        key = {i}
                        id = {item.id}
                        name = {item.name}
                        description = {item.description}
                        image = {item.image}
                        rating = {item.rating}
                        price = {item.price}
                        oldPrice = {item.oldPrice}
                        qty = {item.qty}
                        offers = {offers_list}
                    />
                )}) 
            : (<h4> No item is selected !</h4>)
        } 
        <Row className='float-right d-block pr-5'>
            <span className=' text-muted font-weight-bold'>
                Subtotal
            </span>
            <p className='mb-1 text-align-center font-weight-bold'>
                £ {subtotal.toFixed(2)}
            </p>
            <span className=' text-muted font-weight-bold'>
                Discount
            </span>
            <p className='mb-1 font-weight-bold'>
                £ {discount.toFixed(2)}
            </p>
            <span className=' text-muted font-weight-bold'>
                Total
            </span>
            <p className='mb-5 font-weight-bold'>
                £ {total.toFixed(2)}
            </p>
        </Row>
    </Col>
    </>
  )
}

export default Cart