import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    products:[],
    userInfo:[]
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.products.find((item)=>item.id===action.payload.id)
            if(item){
                state.products = state.products.map((p) => {
                    if (p.id === action.payload.id) {
                        return {
                            ...p,
                            quantity: p.quantity + action.payload.quantity
                        }
                    }
                    return p;
                });
            }else{
                state.products.push( action.payload);
            }
        },
        deleteItem:(state,action)=>{
            state.products= state.products.filter((item)=>item.id!== action.payload);
        },
        resetCart:(state)=>{
            state.products = [];
        }
    }
})


export const{
    addToCart
    
}= amazonSlice.actions

export const{
    deleteItem
}= amazonSlice.actions

export const{
    resetCart
} = amazonSlice.actions



export default amazonSlice.reducer;