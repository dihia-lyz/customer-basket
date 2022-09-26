import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions'

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data,
    }
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        payload: data,
    }
}

export const updateCartItem = (id, qty) => {
    return {
        type: UPDATE_CART_ITEM,
        payload: {id, qty},
    }
}


