import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { useAuthentic } from '../context/AuthContext';

export default function Authorized() {
    const navegate = useNavigate();
    const {isAuthenticated}  = useAuthentic()
    useEffect(()=>{
        if(!isAuthenticated){
            console.log(isAuthenticated)
            navegate("/Auth")
        }
    }, [isAuthenticated])
    return isAuthenticated && <Outlet/>
}
