import { Box, Button, CloseButton, Dialog, Heading, HStack, Input, Portal, Text} from "@chakra-ui/react"
import { useLogic } from "../../states/useLogic"
import { useRef, useState } from "react";
import * as Icon from "react-bootstrap-icons"
import { refs } from "../../logic/refs";
import SwitchButton from "./SwitchButton";
const DialogAi = ({icon, title , onclick , onchange,onwatcherai,onmemberai,  onchange2 , onchange3,  oninputFile, oninputFile2}) => {
    const goal = useLogic((state)=>state.fillGoal);
    const [aiswitch , setaiswitch] = useState(false)
    const [aiswitchR , setaiswitchR] = useState(false)
    const refinput = useRef(null);
    const refinput2 = useRef(null)
    function handleSwitch(){
        aiswitch ? setaiswitch(false) : setaiswitch(true)
    }
    function handleSwitchR(){
        aiswitchR ? setaiswitchR(false) : setaiswitchR(true)
    }
  return (
    <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button  borderRadius={50} bg={"transparent"} variant="outline" size="sm">
          {icon}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton bg={"transparent"} size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
            <SwitchButton onSwitch={handleSwitch} icon1={<Icon.Calendar/>} icon2={<Icon.CalendarX/>}/>
            <SwitchButton onSwitch={handleSwitchR} icon1={<Icon.BookFill/>} icon2={<Icon.BookmarkX/>}/>
            <HStack alignItems={"center"} width={"100%"}>
              <div style={{width:"100%"}}>
                   <Heading fontSize={12}>Goal</Heading>
                    <Input onChange={onchange} placeholder="What is your Goal?"/> 
              </div>
              <div style={{width:"100%"}}>
                <Heading fontSize={12}>Duration</Heading>
              <Input onChange={onchange2} placeholder="duration"/>
              </div>
              <div style={{width:"100%"}}>
                <Heading fontSize={12}>Add Members</Heading>
                <Input onChange={onmemberai} placeholder="invite a friend"/>
              </div>
              <div style={{width:"100%"}}>
                <Heading fontSize={12}>Add Watchers</Heading>
                <Input onChange={onwatcherai} placeholder="invite a watcher"/>
              </div>
              <Input accept="application/pdf" ref={refinput} onChange={oninputFile} type="file" hidden/>
              <Input accept="application/pdf"   ref={refinput2} onChange={oninputFile2} type="file" hidden/>
              {aiswitch && 
                <div style={{width:"100%"}}>
                    <Heading fontSize={12}>Schedule</Heading>
                    <Box onClick={()=>refs(refinput)} borderWidth={1} gap={2} padding={3} borderRadius={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Icon.Cloud/> <Text fontWeight={500} fontSize={10}>Upload</Text>
                    </Box>
                </div>
              }
              {aiswitchR && 
                <div style={{width:"100%"}}>
                    <Heading fontSize={12}>Resources</Heading>
                <Box onClick={()=>refs(refinput2)} borderWidth={1} gap={2} padding={3} borderRadius={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Icon.Cloud/> <Text fontWeight={500} fontSize={10}>Upload</Text>
                </Box>
                </div>
              }
              
              <div style={{marginTop:27}}>
                <Button onClick={onclick}>Add</Button>
              </div>
              
            </HStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
export default DialogAi