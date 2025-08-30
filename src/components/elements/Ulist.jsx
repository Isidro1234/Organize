import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'
import { useAuthentic } from '../../context/AuthContext';

export default function Ulist({isMobileScreen}) {
    const {isAuthenticated} = useAuthentic();
  return (
    <ul style={{display:"flex", flexDirection:"column", gap:10}}>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/Tools"}><li>Tools</li></Link>
            <Link to={"/Service"}><li>Services</li></Link>
            <Link to={"/About"}><li>About us</li></Link>
            
            {!isAuthenticated &&<>
            <Link to={"/SignUp"}><li style={{fontWeight:700, color:"#1f6eab"}}>Sign-Up</li></Link>
            <Link to={"/Login"}><li className='log'  style={{width:"100%"}}><Text fontWeight={700} fontSize={14} color={"white"}>Login</Text> </li></Link>
            </>}
            
            {isAuthenticated &&
            <>
            <Link to={"/Home/Goals"}>
            <li>
              <Avatar.Root>
                <Avatar.Fallback name={auth?.currentUser?.displayName}/>
                <Avatar.Image src='#'/>
              </Avatar.Root>
            </li>
            </Link>
            </> 
            }
            
        </ul>  
  )
}
