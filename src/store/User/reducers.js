import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const {get_one, update_one} = userActions
const initialState = {
    user: []
}
const userReducers = createReducer(
    initialState, 
    (builder) => {
        builder
            .addCase(get_one.fulfilled, (state, action) => {
                const newState = {
                    user: action.payload.response
                }
                return newState
            })
            .addCase(update_one.fulfilled, (state, action) => {
                const newState = {
                    user: action.payload.response
                }
                return newState
            })
    }
)

export default userReducers