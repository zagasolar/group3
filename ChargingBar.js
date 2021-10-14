import React from 'react'

import { Center, Button, NativeBaseProvider, Progress ,Box, Easing, View} from 'native-base'

export default function ChargingBar({bton}) {

  const [val, setVal] = React.useState(0)
  React.useEffect(() => {
    let interval = null;
    
    if(bton){
      interval = setInterval(()=> {
        setVal(val => val + 1 )
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return() => clearInterval(interval)
  }, [bton]);



 return (
   <View marginTop="5">
     <Box w="100%">
      <Progress value={val} colorScheme="#18e7a4" size='2xl' borderWidth="0"
       borderBottomRightRadius="70" borderTopLeftRadius="70" borderBottomLeftRadius="15" 
       borderTopRightRadius="15"
       >
      </Progress>
      </Box>
      </View>
    
    )
}
