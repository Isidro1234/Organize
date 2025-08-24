import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthentic } from '../context/AuthContext'
import Nav from '../components/elements/Nav'
import MainCont from '../components/elements/MainCont'

const Home = () => {
    
  return (
    <div style={{width:"100%",  display:"grid", gridTemplateRows:".5fr  5fr", gap:10}}>
        <Nav/>
        <MainCont/>  
    </div>
  )
}

export default Home
