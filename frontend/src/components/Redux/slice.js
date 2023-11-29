import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct=createAsyncThunk("products",async ()=>{
const {data}=await axios.get(`${window.location.origin}/products`);
return data;
})

const products=createSlice({
    name:"Products",
    initialState:{
        product:[],
        loading:false,
        error:null
    },
    extraReducers:builder=>{
      builder.addCase(fetchProduct.pending,(state)=>{
        state.loading=true
    });
      builder.addCase(fetchProduct.fulfilled,(state,action)=>{
        state.loading=false
        state.product=action.payload
    });
      builder.addCase(fetchProduct.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
    });
      }

    })
    

export default products.reducer;
