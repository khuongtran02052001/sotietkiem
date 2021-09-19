import { createContext, useReducer } from 'react';
import axios from 'axios';
import { AuthReducer } from '../reducers/authReducer'
import { apiUrl, LocalStore } from './constants'

import { useEffect } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    //login 
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.success) {
                localStorage.setItem('islogged', 'true')
                localStorage.setItem(LocalStore, response.data.accessToken)
            }

            console.log(response.data)
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    const registerUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, userForm)
            if (response.data.success)
                localStorage.setItem(LocalStore, response.data.accessToken)
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    const openBook = async openbookForm => {
        try {
            const response = await axios.post(`${apiUrl}/passbook/passbook`, openbookForm)
            if (response.data.success)
                localStorage.setItem(LocalStore, response.data.accessToken)
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    const phieuGui = async phieuguiForm => {
        try {
            const response = await axios.post(`${apiUrl}/depositslip/depositslip`, phieuguiForm)
            if (response.data.success)
                localStorage.setItem(LocalStore, response.data.accessToken)
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    const phieuRut = async phieurutForm => {
        try {
            const response = await axios.post(`${apiUrl}/withdrawalslip/withdrawalslip`, phieurutForm);
            if (response.data.success)
                localStorage.setItem(LocalStore, response.data.accessToken)
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }

    const handleSearch = async searchForm => {
        try {
            const response = await axios.get(`${apiUrl}/search/search?ketqua=` + searchForm)
            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }


    const authContextData = { loginUser, registerUser, openBook, phieuGui, phieuRut, handleSearch, authState }

    return (
        <AuthContext.Provider value={authContextData} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider