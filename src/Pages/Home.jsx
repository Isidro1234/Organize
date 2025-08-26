import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthentic } from '../context/AuthContext'
import Nav from '../components/elements/Nav'
import MainCont from '../components/elements/MainCont'

const Home = () => {
  return (
    <div style={{width:"100%",height:"100%", gap:10}}>
        <MainCont/>  
    </div>
  )
}

export default Home
