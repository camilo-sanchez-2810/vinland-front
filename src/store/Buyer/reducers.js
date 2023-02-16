import { createReducer } from "@reduxjs/toolkit";
import buyerActions from "./actions";

const {get_buyer, update_buyer} = buyerActions
const initialState = {
    buyer: []
}

const buyerReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(get_buyer.fulfilled, (state, action) => {
                let newState = {
                    buyer: action.payload.response
                }
                return newState
            })
            .addCase(update_buyer.fulfilled, (state, action) => {
                let newState = {
                    buyer: action.payload.response
                }
                return newState
            })
    }
)

export default buyerReducer
