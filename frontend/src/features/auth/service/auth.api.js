import { applyMiddleware } from "@reduxjs/toolkit"
import axios from "axios"

const  authApiInstance = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})


export const register = async({name,email,password})=>{

    const response = await authApiInstance.post("/register", {
        email,name,password
    })

    return response.data

}

export const login = async({email,password})=>{
    const response  = await authApiInstance.post("/login",{
        email,password
    })

    return response.data
}

export const getMe = async()=>{
    const response = await authApiInstance.get("/get-user")

    return response.data
}