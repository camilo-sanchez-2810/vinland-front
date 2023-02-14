import { createReducer } from "@reduxjs/toolkit";
import userActions from "./actions";

const {get_one} = userActions
const initialState = {
    user: []
}
const userReducers = createReducer(
    initialState, 
    (builder) => {
        builder
            .addCase(get_one.fulfilled, (state, action) => {
                const newState = {
                    user: action.payload.response[0]
                }
                return newState
            })
    }
)

export default userReducers