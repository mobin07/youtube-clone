import {createSlice} from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT } from "./helper";

const chatSlice =createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
           state.messages.splice(LIVE_CHAT_COUNT,1);   // we are removing the 25th message so our live chat 
                                         //   array length will be 125 only so it will not break/explode our app
            state.messages.push(action.payload) 
        }
    }
})

export const {addMessage} =chatSlice.actions;
export default chatSlice.reducer;