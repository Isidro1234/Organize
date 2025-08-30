import { Avatar, Box, HStack, Progress, Slider, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'
import Logos from '../../assets/Logos'
import * as Icon from "react-bootstrap-icons"
import { useAuthentic } from '../../context/AuthContext'
import { auth } from '../../config/firebase'
import DrawerC from './DrawerC'
import Ulist from './Ulist'
export default function Nav() {
  const {isAuthenticated} = useAuthentic();
  return (
    <Box   hidden={isAuthenticated ? true : false} position={"relative"} zIndex={10} backgroundColor={"white"}  height={"fit-content"} borderBottomWidth={1} padding={5} justifyContent={"space-between"} display={"flex"} alignItems={"center"}>
        <Link to={"/"}><Logos width={130} height={30} /></Link>
        <ul className={"navc"} style={{ gap:10}}>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/Tools"}><li>Tools</li></Link>
                    <Link to={"/Service"}><li>Services</li></Link>
                    <Link to={"/About"}><li>About us</li></Link>
                    
                    {!isAuthenticated &&<>
                    <Link to={"/SignUp"}><li style={{fontWeight:700, color:"#1f6eab"}}>Sign-Up</li></Link>
                    <Link to={"/Login"}><li className='log' ><Text fontWeight={700} fontSize={14} color={"white"}>Login</Text> </li></Link>
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
          <div className='hamburger'>
          <DrawerC button={<Icon.List/>} ul={<Ulist isMobileScreen={true}/>}/>
        </div>
    </Box>
  )
}
