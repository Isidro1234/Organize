import { Box, Button, Heading, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import * as Icon from "react-bootstrap-icons"
import SwitchButton from './SwitchButton'
import TaskPreviewCard from './TasklPreviewCard';
import DialogCard from './DialogCard';
import { useLogic } from '../../states/useLogic';
import DialogAi from './DialogAi';
import SelectItem from './SelectItem';
import { refs } from '../../logic/refs';
import { imageUrl } from '../../logic/uploadImage';
import { useAuthentic } from '../../context/AuthContext';



export default function CenterCont() {
  const [swtchiValue , setSwitchValeu] = useState(false);
  const [task , setTask] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const setgoal = useLogic((state)=>state.setGoals);
  const [name , setName] = useState("");
  const [watcher , setWatcher] = useState("");
  const [description, setDescription] = useState("");
  const [openRef , setOpenref] = useState(false);
  const [StartTime , setStartTime] = useState("");
  const [EndTime , setEndTime] = useState("");
  const [resourceTask , setResourceTask] = useState("")
  const [memberai , setmemberai] = useState("");
  const [scheduleai , setscheduleai] = useState("");
  const [watcherai , setwatcherai] = useState("");
  const [resourceai , setresourceai] = useState("");
  const aigoal = useLogic((state)=>state.AiGoals);
  const [aigoaltype, setAigoalType] = useState();
  const [aiduration, setaiduration] = useState()
  const resourceRef = useRef(null) 
  const {isAuthenticated} = useAuthentic()
   const [GoalItems, setGoalItem] = useState(()=>({
    title:"",
    description:"",
    isShared:false,
    isScheduled:true,
    tasks:[],
    members:[],
    watchers:[],
    duration:""
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
  console.log(GoalItems.watchers)
  async function handleSubmitGoal(){
   if(!GoalItems.title || GoalItems.tasks == 0 || !GoalItems.description){
    console.log("fill")
   }else{
    
    const result = await setgoal(GoalItems);
    if(result){
        console.log("sent")
    }else{
        console.log("there exist an unfinished goal, please finish your current goal first")
    }
   } 
  }
  function deleteFromArray(index, from){
    if(from == "watchers"){
        const updated = GoalItems.watchers.filter((_,i)=> i !== index);
        setGoalItem(prev =>({...prev, watchers:updated}))
    }
    if(from == "members"){
       const updated = GoalItems.members.filter((_,i)=> i !== index);
        setGoalItem(prev =>({...prev, members:updated})) 
    }
    if(from == "tasks"){
        const updated = GoalItems.tasks.filter((_,i)=> i !== index);
        setGoalItem(prev =>({...prev, tasks:updated}))
    }
  }
  function handleAddMember(){

  }
  function handleAddWatcher(){

  }
  function handleShare(){

  }
  async function handleFile( e , from){
    const file = e.target.files[0];
    const filereader = new FileReader();
    filereader.readAsDataURL(file)
    const res = await imageUrl(file);
    console.log(res)
    from == "ai1" && setscheduleai(res)
    from == "ai2" && setresourceai(res)
    from == "task" && setResourceTask(res)
  }
  async function handleAi(){
    const res = await aigoal(aigoaltype , aiduration , memberai , watcherai , scheduleai , resourceai )
  }
  console.log(GoalItems.tasks)
  return (
    <div style={{flex:1, backgroundColor:"white", borderRadius:10}}>
      <Box display={"flex"} flexDirection={"column"} gap={2} borderWidth={1} borderRadius={10} padding={4}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontSize={15}>Goal Title</Heading> 
          {isAuthenticated &&
          <DialogAi onwatcherai ={(e)=>setwatcherai(e.target.value)} onmemberai={(e)=>setmemberai(e.target.value)} oninputFile={(e)=>handleFile(e , "ai1")} oninputFile2={(e)=>handleFile(e , "ai2")} onchange2={(e)=>setaiduration(e.target.value)}  onchange={(e)=>setAigoalType(e.target.value)} onclick={handleAi} icon={<Icon.Robot color='black'/>} title={"Ai Goal generator"}/>
          }
          
        </HStack>
        <SwitchButton onSwitch={handleSwitch} icon1={<Icon.Person/>} icon2={<Icon.People/>}/>
        {swtchiValue &&
        <DialogCard name={GoalItems.members} onName={(e)=>setName(e.target.value)} onclick={()=>setGoalItem((prev)=>({...prev,members:[...prev.members, name]}))} Title={"Add Friends"} bg={"blue.500"} Icon={<Icon.PersonAdd color="white"/>}/>
        }
        <HStack paddingTop={2} width={'100%'} flexWrap={"wrap"}>
            {GoalItems.members.map((item,index)=>{
                return(
                  <Box display={"flex"}  gap={2} alignItems={"center"} padding={3} borderWidth={1} borderRadius={10} key={index}>
                        <Text>{item}</Text>
                        <Icon.X onClick={()=>deleteFromArray(index, "members")}/>
                 </Box>  
                )
            })}
        </HStack>
        <Input value={GoalItems.title} onChange={(e)=>setGoalItem((prev)=>({...prev, title:e.target.value}))} borderRadius={10} title='create a name for your goal' placeholder='Goal Title'/>
        <Heading fontSize={15}>Description</Heading>
        <Textarea value={GoalItems.description} onChange={(e)=>setGoalItem((prev)=>({...prev, description:e.target.value}))} maxH={200} minH={50} title='Describe what is the object for this goal, what are you trying to accomplish' placeholder='Description' borderRadius={10}/>
        <SelectItem  onchange={(e)=>setGoalItem((prev)=>({...prev,duration:e.target.value}))}/>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Heading fontSize={15}>Tasks</Heading> 
          {isAuthenticated &&
          <Button onClick={handleAutoGenerateTasks} title='Auto generate Tasks' bg={"transparent"} size={"sm"} borderRadius={50}><Icon.Cloud color='black'/></Button>    
          }
          
        </HStack>
         
          <SwitchButton onSwitch={handleScheduleSwitch} icon1={<Icon.Calendar/>} icon2={<Icon.CalendarX/>}/> 
        <HStack>
           
            {!swtchiScheduleValue && <>  
           <Input value={StartTime} type="time" onChange={(e)=>setStartTime(e.target.value)}/>
           <Input value={EndTime} type="time" onChange={(e)=>setEndTime(e.target.value)}/>
           </>
           }  
          <Input value={date} onChange={(e)=>setDate(e.target.value)} type="date" placeholder='time'/>
          <Input value={task} onChange={(e)=>setTask(e.target.value)} type='text' placeholder='Task'/>
          <Input onChange={(e)=>handleFile(e , "task")} type="file" hidden ref={resourceRef}/>
          <Box onClick={()=>refs(resourceRef)} borderWidth={1} gap={2} padding={3} borderRadius={10} display={"flex"} justifyContent={"center"} alignItems={"center"}>
             <Icon.Cloud/><Text fontWeight={500} fontSize={10}>Upload</Text>
          </Box>
          <Button disabled={(!date || !task) && true} onClick={()=>{(date && task) && setGoalItem((prev)=>({...prev, tasks:[...prev.tasks, {date,task,StartTime,EndTime,resourceTask:resourceTask || false, isCompleted:false}]})), setTime(""), setTask("")}} bg={"blue.500"}>Add</Button>
        </HStack>
        <VStack>
            {GoalItems.tasks.map((item,index)=>{
                return(
                    <TaskPreviewCard onclick={()=>deleteFromArray(index, "tasks")}  key={index} date={item?.date} EndTime={item?.EndTime} resourceTask={resourceTask}  StartTime={item?.StartTime} task={item?.task}/>
                )
            })}
        </VStack>
        <ul style={{display:"flex",flexDirection:"column", gap:2}}>        
         <DialogCard name={GoalItems.watchers} onName={(e)=>setWatcher(e.target.value)} onclick={()=>setGoalItem((prev)=>({...prev,watchers:[...prev.watchers, watcher]}))} Title={"Add Watcher"} bg={"transparent"} Icon={<Icon.PersonLinesFill color='black'/>}/>
         <HStack paddingTop={1} width={'100%'} flexWrap={"wrap"}>
            {GoalItems.watchers.map((item,index)=>{
                return(
                  <Box  display={"flex"}  gap={2} alignItems={"center"} padding={3} borderWidth={1} borderRadius={10} key={index}>
                        <Text>{item}</Text>
                        <Icon.X onClick={()=>deleteFromArray(index, "watchers")}/>
                 </Box>  
                )
            })}
        </HStack>
        </ul>
        <Button onClick={handleSubmitGoal} bg={"blue.500"}> {swtchiValue ? "Create Shared Goal" : "Create Goal"}</Button>
      </Box>
    </div>
  )
}
