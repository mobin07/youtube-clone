import {createSlice} from "@reduxjs/toolkit"

const seatchSlice=createSlice({
    name:'search',
    initialState:{
        
    },
    reducers:{
        cacheResult:(state,action)=>{
            // {"ip":['iphone','iphone11']}
            // state={...state, ...action.payload};  //spresd operator
            // we can't assign so we are using Object.assign to metge to object

            Object.assign(state,action.payload)
        }
    }
})

export const {cacheResult}=seatchSlice.actions;
export default seatchSlice.reducer;