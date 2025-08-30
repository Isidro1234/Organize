import { Portal, Select, createListCollection } from "@chakra-ui/react"

const SelectItem = ({onchange}) => {
  return (
    <Select.Root onChange={onchange} zIndex={10}   collection={frameworks} size="sm" width="100%">
      <Select.HiddenSelect />
      <Select.Label >Select Duration</Select.Label>
      <Select.Control >
        <Select.Trigger backgroundColor={"transparent"} borderWidth={1} borderColor={"#e6e6e6"}>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup backgroundColor={"transparent"} borderWidth={1} borderColor={"#e6e6e6"} borderTopRightRadius={7} borderBottomRightRadius={7}>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal >
        <Select.Positioner >
          <Select.Content >
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "1 day", value: "1 day" },
    { label: "1 week", value: "1 week" },
    { label: "1 month", value: "1 month" },
    { label: "4 months", value: "4 months" },
    { label: "7 months", value: "7 months" },
    { label: "12 months", value: "12 monts" },
  ],
})

export default SelectItem