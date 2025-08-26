import { Box, Button, Heading, HStack, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import * as Icon from "react-bootstrap-icons"
import SwitchButton from './SwitchButton'
import TaskPreviewCard from './TasklPreviewCard';
import DialogCard from './DialogCard';
import { useLogic } from '../../states/useLogic';



export default function CenterCont() {
  const [swtchiValue , setSwitchValeu] = useState(false);
  const [task , setTask] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const setgoal = useLogic((state)=>state.setGoals);
  const [name , setName] = useState("");
  const [watcher , setWatcher] = useState("");
  const [description, setDescription] = useState("");
  const [openRef , setOpenref] = useState(false)
  const [GoalItems, setGoalItem] = useState(()=>({
    title:"",
    description:"",
    isShared:false,
    isScheduled:true,
    tasks:[],
    members:[],
    watchers:[]
  }))
  const [swtchiScheduleValue , setSwitchScheduleValeu] = useState(false);
    function handleSwitch(){
    swtchiValue ?
    (setSwitchValeu(false),
    setGoalItem((prev)=>({...prev,isShared:false})))
    :
    (setSwitchValeu(true) , setGoalItem((prev)=>({...prev,isShared:true})))
  }
  function handleScheduleSwitch(){
    swtchiScheduleValue ?
    (setSwitchScheduleValeu(false),
    setGoalItem((prev)=>({...prev,isScheduled:false})))
    :
    (setSwitchScheduleValeu(true),
    setGoalItem((prev)=>({...prev,isScheduled:true})))
   
  }

  function handleAutoGenerateGoal(){

  }
  function handleAutoGenerateTasks(){

  }
  function handleSubmitGoal(){
   if(!GoalItems.title || GoalItems.tasks == 0 || !GoalItems.description){
    console.log("fill")
   }else{
    console.log("sent")
    setgoal(GoalItems)
   } 
  }
  function handleAddMember(){

  }
  function handleAddWatcher(){

  }
  function handleShare(){

  }
  console.log(GoalItems.tasks)
  return (
    <div style={{flex:1, backgroundColor:"white", borderRadius:10}}>
      <Box display={"flex"} flexDirection={"column"} gap={2} borderWidth={1} borderRadius={10} padding={5}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontSize={15}>Goal Title</Heading> 
          <Button onClick={handleAutoGenerateGoal} title='Auto generate Goal' bg={"transparent"} size={"sm"} borderRadius={50}><Icon.Robot color='black'/></Button>    
        </HStack>
        <SwitchButton onSwitch={handleSwitch} icon1={<Icon.Person/>} icon2={<Icon.People/>}/>
        {swtchiValue &&
        <DialogCard name={GoalItems.members} onName={(e)=>setName(e.target.value)} onclick={()=>setGoalItem((prev)=>({...prev,members:[...prev.members, name]}))} Title={"Add Friends"} bg={"blue.500"} Icon={<Icon.PersonAdd color="white"/>}/>
        }
        <Input value={GoalItems.title} onChange={(e)=>setGoalItem((prev)=>({...prev, title:e.target.value}))} borderRadius={10} title='create a name for your goal' placeholder='Goal Title'/>
        <Heading fontSize={15}>Description</Heading>
        <Textarea value={GoalItems.description} onChange={(e)=>setGoalItem((prev)=>({...prev, description:e.target.value}))} maxH={200} minH={50} title='Describe what is the object for this goal, what are you trying to accomplish' placeholder='Description' borderRadius={10}/>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontSize={15}>Tasks</Heading> 
          <Button onClick={handleAutoGenerateTasks} title='Auto generate Tasks' bg={"transparent"} size={"sm"} borderRadius={50}><Icon.Robot color='black'/></Button>    
        </HStack>
        
          <SwitchButton onSwitch={handleScheduleSwitch} icon1={<Icon.Calendar/>} icon2={<Icon.CalendarX/>}/> 
        <HStack>
            {!swtchiScheduleValue &&
          <Input value={time} onChange={(e)=>setTime(e.target.value)} type='time' placeholder='time'/>  
           }  
          <Input value={task} onChange={(e)=>setTask(e.target.value)} type='text' placeholder='Task'/>
          <Button disabled={(!time || !task) && true} onClick={()=>{(time && task) && setGoalItem((prev)=>({...prev, tasks:[...prev.tasks, {time,task, isCompleted:false}]})), setTime(""), setTask("")}} bg={"blue.500"}>Add</Button>
        </HStack>
        <VStack>
            {GoalItems.tasks.map((item,index)=>{
                return(
                    <TaskPreviewCard key={index} time={item?.time} task={item?.task}/>
                )
            })}
        </VStack>
        <ul style={{display:"flex",gap:10}}>        
         <DialogCard name={GoalItems.watchers} onName={(e)=>setWatcher(e.target.value)} onclick={()=>setGoalItem((prev)=>({...prev,watchers:[...prev.watchers, watcher]}))} Title={"Add Watcher"} bg={"transparent"} Icon={<Icon.PersonLinesFill color='black'/>}/>
        </ul>
        <Button onClick={handleSubmitGoal} bg={"blue.500"}> {swtchiValue ? "Create Shared Goal" : "Create Goal"}</Button>
      </Box>
    </div>
  )
}
