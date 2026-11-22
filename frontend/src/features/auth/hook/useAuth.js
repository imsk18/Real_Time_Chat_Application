import {register, login , getMe} from "../service/auth.api"
import { useDispatch } from "react-redux"
import { setError, setUser,setLoading } from "../state/auth.slice";

export const useAuth = ()=>{
    const dispatch = useDispatch();

    async function handleRegister({name,email,password}) {

        try{

            dispatch(setLoading(true))
            dispatch(setError(null))

            const data = await register({email,name,password});
            console.log(data.user);
            dispatch(setUser(data.user))

            return true


        }catch(error){
            dispatch(setError(error.response?.data?.message || "register failed"))

        }finally{
            dispatch(setLoading(false))
        }

        




        
    }


    async function handleLogin({email,password}) {

        try{
            dispatch(setLoading(true))
            dispatch(setError(null))

            const data = await login({email,password})
            dispatch(setUser(data.user))


        }catch(error){
           
            dispatch(setError("login failed",error))
        }finally{
            dispatch(setLoading(false))
        }
        
    }


    async function handleGetMe() {
        try{
            dispatch(setLoading(true))
            const data = await getMe();

            dispatch(setUser(data.user))
            return data.user
        }catch(error){
        dispatch(setError(error.message))
    }finally{
        dispatch(setLoading(false))
    }
        
    }







    return {handleRegister,handleLogin,handleGetMe}

}