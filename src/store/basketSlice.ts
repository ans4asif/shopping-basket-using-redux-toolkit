import {configureStore, createSlice} from '@reduxjs/toolkit';
import { INITIAL_STATE } from './state';

const basketSlice=createSlice({
    name:"basket",
    initialState: INITIAL_STATE,
    reducers:{
        add:(state,action)=>{
           return(state.map((item)=>{
           if(item.id !==action.payload.id){
               return item
            }
            return {...item,
                added:true
            }

           } ))
        },
        remove:(state,action)=>{
            return (state.map(item=>{
             if(item.id !== action.payload.id){
                 return item
             }
             return{
                 ...item,
                 added:false
             }
            }))
            
        },
        increment:(state,action)=>{
            return (state.map((item)=>{
                if(item.id !== action.payload.id){
                    return item
                }
                return{
                    ...item,
                    quantity: item.quantity + 1
                }
            }))
        },
        decrement:(state,action)=>{
            return (state.map((item)=>{
                if(item.id !== action.payload.id){
                    return item
                }
                return{
                    ...item,
                    quantity: item.quantity - 1
                }
            }))
        }

    }
})

const store=configureStore({
    reducer:basketSlice.reducer
    })

export {store,basketSlice}
export const {add,remove,increment,decrement}=basketSlice.actions