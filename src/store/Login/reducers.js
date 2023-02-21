import { createReducer } from '@reduxjs/toolkit'
import authActions from './actions'

const { registrar_usuario,iniciar_sesion,iniciar_sesion_con_token,cerrar_sesion } = authActions

const initialState = {
    messages: [],
    token: "",
    email: "",
    is_admin: false,
    is_lock: false,
    is_buyer: false,
    is_online: false
}

const authReducer = createReducer(initialState,
    (builder) => {
        builder
        .addCase(registrar_usuario.fulfilled, (state, action) => {
            const { success,response } = action.payload
            //console.log(action.payload)
            let newState = {}
            if (success) {
                newState = {
                    ...state,
                    messages: response
                }
            } else {
                if (typeof response.response === "string") {
                    newState = {
                        ...state,
                        messages: [response.response]
                    }
                } else {
                    newState = {
                        ...state,
                        messages: response.response.map(mes => mes.message)
                    }
                }
            }
            //console.log(newState)
            return newState
        })
        .addCase(iniciar_sesion.fulfilled, (state, action) => {
            const { success,response } = action.payload
            //console.log(action.payload)
            let newState = {}
            if (success) {
                const { user,token } = response
                localStorage.setItem('token',token)
                newState = {
                    ...state,
                    email: user.email,
                    is_admin: user.is_admin,
                    is_lock: user.is_lock,
                    is_buyer: user.is_buyer,
                    is_online: true,
                    messages: ['welcome!'],
                    token: token
                }
            } else {
                if (typeof response.response === "string") {
                    newState = {
                        ...state,
                        messages: [response.response]
                    }
                } else {
                    newState = {
                        ...state,
                        messages: response.response.map(mes => mes.message)
                    }
                }
            }
            //console.log(newState)
            return newState
        })
        .addCase(iniciar_sesion_con_token.fulfilled, (state, action) => {
            const { success,response,token } = action.payload
            //console.log(action.payload)
            let newState = {}
            if (success) {
                const { user,token } = response
                newState = {
                    ...state,
                    email: user.email,
                    is_admin: user.is_admin,
                    is_lock: user.is_lock,
                    is_buyer: user.is_buyer,
                    is_online: true,
                    messages: ['welcome back!'],
                    token
                }
            } else {
                newState = {
                    ...state,
                    messages: [response]
                }
            }
            //console.log(newState)
            return newState
        })
        .addCase(cerrar_sesion.fulfilled, (state, action) => {
            //console.log(action.payload)
            localStorage.removeItem('token')
            let newState = {
                ...initialState,
                messages: ['see you soon!']
            }
            return newState
        })

    }
)

export default authReducer