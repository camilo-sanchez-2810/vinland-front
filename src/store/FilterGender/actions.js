import { createAction } from "@reduxjs/toolkit";

const filterGender = createAction(
    'filter_genre',
    (data) => {
        return{
            payload:data
        }
    }
)

const filterActions = {filterGender}

 export default filterActions