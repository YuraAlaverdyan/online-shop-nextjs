import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: false

}

export const fetchProducts = createAsyncThunk("products/fetchProducts",
    async () => {
        const res = await axios
            .get("https://fakestoreapi.com/products")
        return res.data
    }
)

export const fetchCategories = createAsyncThunk("products/categories",
    async () => {
        const res = await axios
            .get("https://fakestoreapi.com/products/categories")
        return res.data
    }
)

export const postNewProduct = createAsyncThunk("products/postNewProduct",
    async (data) => {
        const res = axios("https://fakestoreapi.com/products", JSON.stringify(data))
        .then(r => r.data)
        return res
    }
)

export const ProductListSlice = createSlice({
    name: "ProductList",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.error = true
            state.loading = false
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(postNewProduct.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})

export default ProductListSlice.reducer

export const { addItem } = ProductListSlice.actions