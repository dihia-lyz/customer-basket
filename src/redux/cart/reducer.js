import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from '../actions'

const INIT_STATE = { cartItems: []  }

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let item = action.payload;
            let existItem = state.cartItems.length && state.cartItems.find((x) => x.id === item.id) ;
            if (!existItem) {
                localStorage.setItem('cart', JSON.stringify([...state.cartItems,{...item, qty:1}]))
                return {
                ...state,
                cartItems: [...state.cartItems,{...item, qty:1}],
                };
            }
            
        case REMOVE_FROM_CART:
            let items = state.cartItems
            localStorage.setItem('cart',items && JSON.stringify(items.filter((x) => x.id !== action.payload)))
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== action.payload),
        };

        case UPDATE_CART_ITEM:
            let _newItems = state.cartItems.map((x) => {
                return  ( x.id === action.payload.id 
                        ? {...x, qty :action.payload.qty } 
                        : x  )
            })
            localStorage.setItem('cart',JSON.stringify(_newItems))
            return {
                ...state,
                cartItems: [..._newItems ]
            };
        default:
            return state;
        }
}