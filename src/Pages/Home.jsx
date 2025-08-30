import { Box, Button, Heading, HStack, Skeleton, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useAuthentic } from '../context/AuthContext'
import Nav from '../components/elements/Nav'
import MainCont from '../components/elements/MainCont'
import LeftIlustration from '../assets/LeftIlustration'
import Footer from '../components/elements/Footer'
import Service1 from '../assets/Service1'
import RightIconService from '../assets/RightIconService'
import RightIconService2 from '../assets/RightIconService2'
import { useLogic } from '../states/useLogic'
import * as Icon from "react-bootstrap-icons"
import nProgress from 'nprogress'
import { useNavigate } from 'react-router'
import Service2 from '../assets/Service2'
import Service3 from '../assets/Service3'

const Home = () => {
  const refvideo = useRef(null);
  const width = window.screen.width;
  const height = window.screen.height;
  const navegate = useNavigate()
  function handlePress(from){
   
    if(from === "tik"){
      document.location.href = "https://www.tiktok.com/@isi_a4";
    }else if(from === "link"){
      document.location.href = "https://www.linkedin.com/in/isidoro-zau-a10176230/";
    }else if(from == "yout"){
      document.location.href = "https://www.youtube.com/@isidro-p6l";
    }else if(from == "inst"){
      document.location.href = "https://www.instagram.com/isidro_zau/";
    }else if(from == "git"){
      document.location.href = "https://github.com/Isidro1234/Organize";
    }else if(from == "started"){
      navegate("/Login")
    }else if(from == "tools"){
      navegate("/Tools")
    }else if(from == "service"){
      navegate("/Service")
    }

  }
  return (
    <div style={{width:"100%",height:"100%", gap:10}}>
      <Box position={"relative"} display={"flex"} width={"100%"} height={"90vh"}   alignItems={"center"}>
        <VStack className='hero' backgroundColor={"white"} zIndex={10} display={"flex"} flex={.9} gap={5} alignItems={"flex-start"} borderRadius={5} marginLeft={-7} padding={20} justifyContent={"flex-start"}>
          <Heading fontSize={"2rem"}>Welcome to INTA Tools</Heading>
          <Text >Start now using some of our powerful productivity tools.
            from resume generators to goal organization tools, with INTA tools you can stop focusing
            on tiring tasks and get to what matters
          </Text>
          <Button size={"lg"} onClick={()=>handlePress("started")}>Get Started Now</Button>
         </VStack>
         <video  autoPlay={true} loop={true} controls={false} style={{position:"absolute",objectFit:"cover", width:"100%", height:"100%"}} src='https://www.pexels.com/download/video/18069232/'/>
      </Box>
      <Box position={"relative"} display={"flex"} alignItems={"center"} height={"70vh"} backgroundColor={"#f8fdffff"}>
        <VStack flex={1} gap={7} padding={10} alignItems={"flex-start"}>
          
          <Heading fontSize={40} >Tools</Heading>
          <Text maxWidth={400} color={"gray.500"}>find the best productivity tools with bwisi. We are constantly enhancing,
            and creating new tools to help you automate repetitive tasks and focus on what actually matters.
            click below to learn more
          </Text>
          <Button onClick={()=>handlePress("tools")}>Learn More</Button>
        </VStack>
        <VStack  className='sideillustration' flex={1} >
            <RightIconService width={400} height={400}/>
        </VStack>
        <HStack style={{display:"flex",maxWidth:400, alignItems:"center", position:"absolute", borderRadius:50, bottom:-10 , left:-10}}>
          <Service1 width={"50%"} height={"50%"}/>
          <Service2 width={"50%"} height={"50%"}/>
          <Service3 width={"50%"} height={"50%"}/>
        </HStack>
      </Box>
      <Box display={"flex"} flexWrap={"wrap-reverse"} alignItems={"center"} height={"100vh"} backgroundColor={"white"}>
        <VStack flex={1} gap={7} padding={10} alignItems={"flex-start"}>
          
          <Heading fontSize={40}>Services</Heading>
          <Text maxWidth={400}>Currently we only offer productivity tools which at the moment are 100% free.
            However, we have plans to later on offers plans to build personalized tools for companies. to Learn more about that
            contact us by clicking below 
          </Text>
          <Button onClick={()=>handlePress("service")}>Learn More</Button>
        </VStack>
        <VStack flex={1}>
            <RightIconService2  width={340} height={340}/>
        </VStack>
      </Box>
      <Box display={"flex"} flexWrap={"wrap-reverse"} alignItems={"center"} width={"100%"} minHeight={"100vh"} backgroundColor={"gray.100"}>
        <VStack  flex={1} gap={7} padding={10} alignItems={"flex-start"}>
          
          <Heading fontSize={40}>About us</Heading>
          <Text maxWidth={400}> My name is Isidoro Zau, creator and founder of this website, I am currently a computer 
            science student at HCC (Houston City College), and this website is a side project that aims to help individuals and companies who might find useful the tools we have to offer.
            currently the tools are completly free of charge. I hope the user finds these tools useful.</Text>
            <HStack gap={4}>
              <Button onClick={()=>handlePress("git")} display={"flex"} padding={1} height={10} width={10} justifyContent={"center"} alignItems={"center"} borderRadius={100}><Icon.Github/></Button>
              <Button onClick={()=>handlePress("link")}display={"flex"} padding={1} height={10} width={10} justifyContent={"center"} alignItems={"center"} borderRadius={100}><Icon.Linkedin/></Button>
              <Button onClick={()=>handlePress("yout")}display={"flex"} padding={1} height={10} width={10} justifyContent={"center"} alignItems={"center"} borderRadius={100}><Icon.Youtube/></Button>
              <Button onClick={()=>handlePress("tik")}display={"flex"} padding={1} height={10} width={10} justifyContent={"center"} alignItems={"center"} borderRadius={100}><Icon.Tiktok/></Button>
              <Button onClick={()=>handlePress("inst")}display={"flex"} padding={1} height={10} width={10} justifyContent={"center"} alignItems={"center"} borderRadius={100}><Icon.Instagram/></Button>
            </HStack>
            
        </VStack>
        <VStack  flex={1} minW={200} height={"fit-content"}>
            <img style={{width:300, height:300 , borderRadius:"50%"}} src='https://media.licdn.com/dms/image/v2/D5603AQErpfMA60QsUA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667602106805?e=1759363200&v=beta&t=A3VTcIx6HZnkuh5Zd3eAmtKJ0uqaeeyBWSJnbv6_PqQ'/>
        </VStack>
      </Box>
    </div>
  )
}

export default Home
