import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const AuthContext = createContext(null);
export default function AuthProvider({children}) {
    const navigate = useNavigate()
    const [user , setUser] = useState(null)
    const [isAuthenticated , setAuthenticated] = useState(false);
    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/Home")
        }else{
            navigate("/")
        }
    }, [])
    
  return (
    <AuthContext.Provider value={{user , isAuthenticated , setAuthenticated , setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuthentic = () => useContext(AuthContext)

  