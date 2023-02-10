import { createReducer } from "@reduxjs/toolkit";
import filterActions from "./actions";

const {filterGender} = filterActions

const initialState = {
    filterGender: []
}

const filterReducers = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(filterGender, (state, action) => {
                if (state.filterGender.includes(action.payload)) {
                    const newState = {
                        filterGender: state.filterGender.filter((id) => id !== action.payload)
                    }
                    return newState
                }
                else{
                    state.filterGender.push(action.payload)
                }
            })
    }
)

export default filterReducers