import { createReducer } from "@reduxjs/toolkit";
import adminActions from "./actions";

const { getUsers,updateLockUser, deleteUser} = adminActions

const initialState = {users: [],  message: ""}

const adminReducers = createReducer(initialState, (builder) =>{
    builder
        .addCase(getUsers.fulfilled, (state, action)=>{
            console.log(action)
            let newState = {
                users: action.payload.response.data,
                message: action.payload.message
            }
            return newState
        })
    });


const adminReducerAll = { adminReducers,}


export default adminReducerAll