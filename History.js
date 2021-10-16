import React from "react";
import {
    Dimensions,
    StatusBar,
    Animated,
  } from 'react-native';
import { Box, Text, HStack, NativeBaseProvider, Center, Pressable, Modal, FlatList, VStack, Spacer } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";

// import ChargingHistory from "./ChargingHistory";
// import  PaymentHistory  from "./PaymentHistory";

// Charging History

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

///////////////

// Payment History

const PaymentHistory = () => {
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

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    charging:  ChargingHistory,
    payment: PaymentHistory
})


export function History({navigation}) {

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key:'charging', title:'Charging History'},
        { key:'payment', title:"Payments History" }
    ]);

    const renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
          <Box flexDirection="row">
            {props.navigationState.routes.map((route, i) => {
              const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                  inputIndex === i ? 1 : 0.5
                ),
              });
              const color = index === i ? '#1f2937' : '#a1a1aa';
              const borderColor = index === i ? 'cyan.500' : 'coolGray.200';
    
              return (
                <Box
                  borderBottomWidth="3"
                  borderColor={borderColor}
                  flex={1}
                  alignItems="center"
                  p="3"
                  cursor="pointer">
                  <Pressable
                    onPress={() => {
                      console.log(i);
                      setIndex(i);
                    }}>
                    <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                  </Pressable>
                </Box>
              );
            })}
          </Box>
        );
      };
    
      return (
        <NativeBaseProvider>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ marginTop: StatusBar.currentHeight }}
          />
        </NativeBaseProvider>
      );
    
}