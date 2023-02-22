import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products:[]
}

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            if (state.products.some(prod => prod.id === action.payload.id)) {
                state.products.find(prod => prod.id === action.payload.id).quantity++
            } else {
                state.products.push({...action.payload, quantity: 1})
            }
        },
        quantityUp: (state, action) => {
            state.products.find(prod => prod.id === action.payload).quantity++
        },
        quantityDown: (state, action) => {
            if (state.products.find(prod => prod.id === action.payload).quantity === 1) {
                return
            }
            state.products.find(prod => prod.id === action.payload).quantity--
        },
        deleteFromCart: (state, action) => {
            const index = state.products.indexOf(state.products.find(prod => prod.id === action.payload))
            state.products.splice(index,1)
        }
    }

})

export default CartSlice.reducer

export const { addToCart, quantityUp, quantityDown, deleteFromCart } = CartSlice.actions