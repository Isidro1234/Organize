import { Box, Button, CloseButton, Dialog, HStack, Input, Portal, Text, VStack } from "@chakra-ui/react"
import React, { useRef, useState } from 'react'
import * as Icon from "react-bootstrap-icons"
export default function DialogCard({Icon, bg, Title, onclick, onName, name}) {
  return (
    <Dialog.Root   role="alertdialog" >
      <Dialog.Trigger asChild >
        <Button size={"sm"} borderRadius={50} width={"fit-content"} bg={bg}>{Icon}</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{Title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body flexWrap={"wrap"}>
                <HStack>
                    <Input  onChange={onName} placeholder="Name"/>
                    <Button onClick={onclick} bg={"blue.500"}>Add</Button>
                </HStack>
                <HStack paddingTop={2} width={'100%'} flexWrap={"wrap"}>
                    {name.map((item,index)=>{
                        return(
                            <Box display={"flex"}  gap={2} alignItems={"center"} padding={3} borderWidth={1} borderRadius={10} key={index}>
                                <Text>{item}</Text>
                            </Box>
                        )
                    })}
                </HStack>
            </Dialog.Body>
            <Dialog.Footer>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton borderRadius={50} bg={"red.500"} color={"white"} size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
