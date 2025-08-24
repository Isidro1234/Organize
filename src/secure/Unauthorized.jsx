import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { useAuthentic } from '../context/AuthContext';

export default function Unauthorized() {
  const {isAuthenticated} = useAuthentic()
  const navigate = useNavigate();
   useEffect(()=>{
          if(isAuthenticated){
              console.log(isAuthenticated)
              navigate("/")
          }
      }, [isAuthenticated])
  return !isAuthenticated && <Outlet/> 
}
