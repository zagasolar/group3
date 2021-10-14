import React from "react";
import { View, Text, Progress, Center, HStack, Stack, Image, Spacer } from "native-base";


export default function ChargingAnim() {

    
    return(
<View marginTop="4"> 
    <Stack p="5" flexDirection="row" >

        <Image       
      size="md"
      alignSelf="center"
      resizeMode="cover"
      borderRadius={100} source={require('../assets/chargest.png')} />

<Spacer />

        <Image       
      size="md"
      alignSelf="center"
      resizeMode={"cover"}
      borderRadius={100} source={require('../assets/ecar.png')} />  

    </Stack>
</View> 
    )
}