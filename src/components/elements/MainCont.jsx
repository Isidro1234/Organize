import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from './ProgressBar'
import GoalCard from './GoalCard'
import Background from '../../assets/background.png'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import CenterCont from './CenterCont'

export default function MainCont() {
  return (
    <div className='bg' > 
      <div style={{display:"flex",gap:10,borderRadius:10, padding:10}}>
        <LeftSidebar/>
        <CenterCont/>
        <RightSidebar/>
      </div>
    </div>
  )
}
