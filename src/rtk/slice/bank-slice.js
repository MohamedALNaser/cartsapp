import { createSlice } from "@reduxjs/toolkit";

const initialState =  1000; // initial state

export const bankSlice = createSlice({ // createSlice is a function that takes an object as an argument and returns an object with three properties: reducer, actions, and name.
    name:"bank", // name of the slice 
    initialState, // initial state
    reducers:{ // reducers
        withdraw:(state , action)=>{ // reducer function that takes two arguments: state and action and returns the new state
            return state -=action.payload;
        },
        deposite:(state,action)=>{
            return state += action.payload
        }
    }
})

export const {withdraw,deposite} = bankSlice.actions; // export the actions
export default bankSlice.reducer; // export the reducer 