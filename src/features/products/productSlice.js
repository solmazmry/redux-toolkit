import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[
    {
        id:1,
        name:'Apple'
    },
    {
        id:2,
        name:'Banana'
    },
    {
        id:3,
        name:'Cherry'
    },
    {
        id:4,
        name:'Data'
    },
    {
        id:5,
        name:'Fig'
    },
    {
        id:6,
        name:'Grape'
    },
  ],
  filter:'',
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter:(state,action)=>{
        state.filter=action.payload
    }
  },
});

export const { setFilter } = productSlice.actions;

export default productSlice.reducer;
