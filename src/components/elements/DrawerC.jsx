import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import Ulist from "./Ulist"

const DrawerC = ({button}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button bg={"transparent"} variant="outline" size="sm">
          {button}
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Ulist/>
            </Drawer.Body>
            <Drawer.CloseTrigger bg={"transparent"} asChild>
              <CloseButton bg={"transparent"} size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default DrawerC