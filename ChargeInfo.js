import React from "react"

import { VStack, Stack, HStack, Center, FlatList, Heading, Text, View, Box, Spacer, CheckCircleIcon, SectionList } from "native-base"


export function ChargeInfo({bton, setBton}) {

const data = [
  {
    status: "charging",
    elapsed: "80 min",
    remaining: "100 min",
    powerconsumed: "30kWh"
  }
]

  return (

<View marginTop="5" marginBottom="7">

<Stack p="3" flexDirection="row" bg={bton ? '#18e7a4' : 'red.500'} borderRadius="5" marginBottom="1">
<CheckCircleIcon size="4"  mt="0.5"  />
<Text alignSelf="center" color="#fff" fontWeight="bold">  Status</Text>
<Spacer />
<Text alignSelf="center" >{bton ? 'charging' : 'not charging'}</Text>
</Stack>

<Stack p="3" flexDirection="row" bg='#18e7a4' borderRadius="5" marginBottom="1" >
<CheckCircleIcon size="4"  mt="0.5"  />
<Text alignSelf="center"  color="#fff" fontWeight="bold">  Elapsed Time</Text>
<Spacer />
<Text alignSelf="center"  color="#fff">60 min</Text>
</Stack>

<Stack p="3" flexDirection="row" bg='#18e7a4' borderRadius="5" marginBottom="1">
<CheckCircleIcon size="4"  mt="0.5"  />
<Text alignSelf="center"  color="#fff" fontWeight="bold" >  Remaining Time</Text>
<Spacer />
<Text alignSelf="center"  color="#fff" >80 min</Text>
</Stack>

<Stack p="3" flexDirection="row" bg='#18e7a4' borderRadius="5" marginBottom="8">
<CheckCircleIcon size="4"  mt="0.5"  />
<Text alignSelf="center"  color="#fff" fontWeight="bold" > Power Consumed</Text>
<Spacer />
<Text alignSelf="center"  color="#fff" >30 kWh</Text>
</Stack> 

<Stack p="3" flexDirection="row" borderRadius="5" marginBottom="1">
<Text fontWeight="bold">Start Time: <Text color="blueGray.400"> 12:00 </Text></Text>
<Spacer />
<Text fontWeight="bold">End Time:<Text color="blueGray.400"> 12:00 </Text></Text>
</Stack> 

<Stack p="3" flexDirection="row" borderRadius="5" marginBottom="1">
<Text fontWeight="bold" >Connector Type: <Text color="blueGray.400"> 12:00 </Text></Text>
<Spacer />
<Text fontWeight="bold">Car Name:<Text color="blueGray.400"> 12:00 </Text></Text>
</Stack> 

<Stack p="3" flexDirection="row" borderRadius="5" marginBottom="1">
<Text fontWeight="bold">Total Power Consumed: <Text color="blueGray.400"> 12:00 </Text> </Text>
<Spacer />
<Text fontWeight="bold">Amount:<Text color="blueGray.400"> 12:00 </Text> </Text>
</Stack> 

</View>
    
  )
}






{/* <Box py="5" flex={1} w={{ base: "100%", md: "25%",}} ></Box> */}