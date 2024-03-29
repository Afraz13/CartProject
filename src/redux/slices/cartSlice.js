import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //function to add item to cart
        addToCart:(state,action)=>{
            state.push(action.payload)            
        },
                    //function to remove from cart
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }

    }
})

export const {addToCart,removeFromCart} =cartSlice.actions
export default cartSlice.reducer