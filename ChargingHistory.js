import { Center, Box, HStack, VStack, Avatar, Spacer, Text, Pressable, Modal, FlatList } from 'native-base'
import React from 'react'

const ChargingHistory = () => {

  const data = [
    {
      name : "Zaga EV Charging Station",
      amount : "250 Rs.",
      date: "oct 10 2021",
      power: "20kWh"
    },
    {
      name : "Boss EV Charging Station",
      amount : "110 Rs.",
      date: "oct 8 2021",
      power: "20kWh"
    },
    {
      name : "goe EV Charging Station",
      amount : "200 Rs.",
      date: "oct 2 2021",
      power: "20kWh"
    },
  ]


  const [showModal, setShowModal] = React.useState(false)
  return (
    <FlatList
    data={data}
    renderItem={({ item }) => (
      <Box>
<Pressable onPress={() => setShowModal(true)} >
<Center flex={1}>
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "gray.600",
        }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2"
      >
        <HStack space={3} justifyContent="space-between">
          
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
             {item.name}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {item.date}
            </Text>
          </VStack>
          <Spacer />
          <Text
            fontSize="xs"
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            alignSelf="flex-start"
          >
            {item.amount}
          </Text>
        </HStack>
      </Box>
</Center>
</Pressable>

<Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
<Modal.Content maxWidth="350">

<Modal.Body>
<VStack space={3}>
  <HStack alignItems="center" justifyContent="space-between">
    <Text fontWeight="medium">Amount</Text>
    <Text color="blueGray.400">{item.amount}</Text>
  </HStack>
  <HStack alignItems="center" justifyContent="space-between">
    <Text fontWeight="medium">powerConsumed</Text>
    <Text color="blueGray.400">{item.power}</Text>
  </HStack>
  <HStack alignItems="center" justifyContent="space-between">
    <Text fontWeight="medium">Date</Text>
    <Text color="green.500">{item.date}</Text>
  </HStack>
</VStack>
</Modal.Body>
</Modal.Content>
</Modal>

</Box>      
    )}
    keyExtractor={(item) => item.id}
  />
  )
}

export default ChargingHistory

