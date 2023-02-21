import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions.js";

const {Alert, AlertFalse} = alertActions

const initialState = {
    view: false,
    messages: "",
    success: ''
}

const alertReducer = createReducer(
    initialState, 
    (builder) => {
        builder
            .addCase(
                Alert,
                    (state, action) => {
                        console.log(action) 
                            let newState = {
                                view: true,
                                messages: action.payload.messages,
                                success: action.payload.success
                    }
                    return newState
                }
            )
            .addCase(
                AlertFalse,
                    (state, action) => {
                        console.log(action)
                            let newState = {
                                view: false,
                    } 
                    return newState
                }    
            )
    }
)

export default alertReducer