import { HStack, Progress } from "@chakra-ui/react"

 const ProgressBar = ({percentage}) => {
  return (
    <Progress.Root striped color={"blue"}  defaultValue={percentage}  width={"100%"} animated={true} animation={"alternate-reverse"} animationRangeStart={"cover"} animationRangeEnd={"exit"}>
      <HStack gap="5">
        <Progress.Track flex="1" bgColor={"#f6f6f6"} borderRadius={50}>
          <Progress.Range bgColor={"blue.400"} borderRadius={50}/>
        </Progress.Track>
        <Progress.ValueText>{percentage}%</Progress.ValueText>
      </HStack>
    </Progress.Root>
  )
}
export default ProgressBar;