import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom';


const Protected = () => {
const user = useSelector((state) => state.auth.user);
const loading = useSelector(state => state.auth.loading)


if(loading){
    return <div>loading...</div>
}
console.log(user);

if(!user){
    return <Navigate to="/login" replace/>
}


return <Outlet/>
  
}

export default Protected