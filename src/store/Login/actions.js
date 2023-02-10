import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const apiUrl = 'http://localhost:8080/'

const registrar_usuario = createAsyncThunk('registrar_usuario', async (data) => {
    let url = `http://localhost:8080/api/users/signin`
    try {
        let res = await axios.post(url,data)
        return { 
            success: true,
            response: res.data.response
        }
        
    } catch (error) {
        
        return {
            success: false,
            response: error.response.data
        }
    }
})

const iniciar_sesion = createAsyncThunk('iniciar_sesion', async (data) => {
    let url = `${apiUrl}api/api/users/signin`
    try {
        let res = await axios.post(url,data)
        return { 
            success: true,
            response: res.data.response
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const iniciar_sesion_con_token = createAsyncThunk('iniciar_sesion_con_token', async (token) => {
    let url = `${apiUrl}api/users/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let res = await axios.post(url,null,headers)
        return { 
            success: true,
            response: {
                ...res.data.response,
                token
            }
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const cerrar_sesion = createAsyncThunk('cerrar_sesion', async (token) => {
    let url = `${apiUrl}api/users/signout`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        await axios.post(url,null,headers)
        return { 
            success: true,
            response: null
        }
    } catch (error) {
        //console.log(error)
        return {
            success: false,
            response: error.response.data
        }
    }
})

const authActions= { registrar_usuario,iniciar_sesion,iniciar_sesion_con_token,cerrar_sesion }

export default authActions