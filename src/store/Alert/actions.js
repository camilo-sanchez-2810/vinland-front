import { createAction } from "@reduxjs/toolkit";

const Alert = createAction(
    "Alert", 
    (datos ) => {
        console.log(datos)
        return {payload: datos}
    }
)
const AlertFalse = createAction(
    "AlertFalse",
    (datos) => {
        console.log(datos)
        return {payload: datos}
    }
)
const alertActions = {Alert, AlertFalse}

export default alertActions