import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "./ProductList.slice";
import CartReducer from "./Cart.slice"

const Root = combineReducers({
    products:ProductListSlice,
    cart:CartReducer
})

const store = configureStore({
    reducer:Root
})

export default store