import React from 'react'
import { Switch } from "@chakra-ui/react"
export default function SwitchButton({icon1 , icon2 , onSwitch}) {
  return (
    <div>
      <Switch.Root onCheckedChange={onSwitch}>
        {icon1}
        <Switch.HiddenInput />
        <Switch.Control  />
        {icon2}
      </Switch.Root>
    </div>
  )
}
