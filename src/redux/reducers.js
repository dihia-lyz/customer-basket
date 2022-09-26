import { combineReducers } from "redux"

import cartItems from "./cart/reducer"


const reducers = combineReducers({ cartItems :cartItems })

export default reducers
