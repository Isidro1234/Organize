import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router'
import Logo from '../../assets/logo'
import * as Icon from "react-bootstrap-icons"
import { useAuthentic } from '../../context/AuthContext'
export default function Nav() {
    const {isAuthenticated} = useAuthentic()
  return (
    <Box   height={"fit-content"} borderWidth={1} padding={5} justifyContent={"space-between"} display={"flex"} alignItems={"center"}>
        <Logo width={57} height={57} />
        <ul style={{display:"flex", gap:10}}>
            <Link to={"/"}><li><Icon.House/>Home</li></Link>
            {!isAuthenticated &&
            <Link to={"/Login"}><li><Icon.PersonFill/> Login</li></Link>
            }
            
            {isAuthenticated &&
            <>
            <Link to={"/Goals"}><li>Goals</li></Link>
            <Link to={"/Add"}><li>Add</li></Link>
            <Link to={"/Settings"}><li>Settings</li></Link>
            <Link to={"/Ai"}><li>Ai Routine Generator</li></Link>
            </> 
            }
            
        </ul>
    </Box>
  )
}
