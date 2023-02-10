import { createReducer } from "@reduxjs/toolkit";
import genreActions from "./actions";

const {get_genres} = genreActions
const initialState = {
    genres: []
}

const genreReducers = createReducer(initialState, (builder) => {
    builder
    .addCase(get_genres.fulfilled, (state, action) => {
        const newState = {
            genre: action.payload.response
        }
        return newState
    })
})

export default genreReducers