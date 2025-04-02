import { createSlice } from "@reduxjs/toolkit";

const requestSLice =createSlice({
    name: "request",
    initialState: null,
    reducers:{
        addRequest: (state, action)=>{
            return action.payload
        }
    }
})

export const {addRequest} = requestSLice.actions;
export default requestSLice.reducer