import { Box, Button, CheckCircleIcon, HStack, Image, Modal, NativeBaseProvider, Progress, Spacer, Stack, Text, View, VStack } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function Charging({navigation}) {

  const [bton, setBton] = React.useState(false)
  //   const [showTransaction, setShowTransaction] = React.useState(false)

  const [val, setVal] = React.useState(0)
  React.useEffect(() => {
    let interval = null;

    if (bton) {
      interval = setInterval(() => {
        setVal(val => val + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [bton]);

  const [showTransaction, setShowTransaction] = React.useState(false)

  const [confirmSummary, setConfirmSummary] = React.useState(false)

  const [button, setButton] = React.useState("Start")
  function handlePress(button) {
    if (button === 'Start') {
      setButton('Stop')
      setBton(true)
    }
    else {
      setButton('Start')
      setBton(false)
      setConfirmSummary(true)
    }
  }


  const data1 = [
    {
      status: "charging",
      elapsed: "80 min",
      remaining: "100 min",
      powerconsumed: "30kWh"
    }
  ]


  return (

    <NativeBaseProvider>
    <SafeAreaView style={{ marginTop: Platform.OS === "android" ? 10 : 0 }}>

      <View>

        {/* chargingAnim */}

        <View marginTop="4">
          <Stack p="5" flexDirection="row" >

            <Image
              size="md"
              alignSelf="center"
              resizeMode="cover"
              borderRadius={100} source={require('./assets/chargest.png')} />

            <Spacer />

            <Image
              size="md"
              alignSelf="center"
              resizeMode={"cover"}
              borderRadius={100} source={require('./assets/ecar.png')} />

          </Stack>
        </View>

        {/* //////////////////////////// */}

        {/* chargingbar */}

        <View marginTop="5">
          <Box w="100%">
            <Progress value={val} colorScheme="#18e7a4" size='2xl' borderWidth="0"
              borderBottomRightRadius="70" borderTopLeftRadius="70" borderBottomLeftRadius="15"
              borderTopRightRadius="15"
            >
            </Progress>
          </Box>
        </View>

        {/* //////////////////////////// */}

        {/* charginginfo */}

        <View marginTop="5" marginBottom="7">

          <Stack p="3" flexDirection="row" bg={bton ? '#18e7a4' : 'red.500'} borderRadius="5" marginBottom="1">
            <CheckCircleIcon size="4" mt="0.5" />
            <Text alignSelf="center" color="#fff" fontWeight="bold">  Status</Text>
            <Spacer />
            <Text alignSelf="center" >{bton ? 'charging' : 'not charging'}</Text>
          </Stack>

          <Stack p="3" flexDirection="row" bg='#18e7a4' borderRadius="5" marginBottom="1" >
            <CheckCircleIcon size="4" mt="0.5" />
            <Text alignSelf="center" color="#fff" fontWeight="bold">  Elapsed Time</Text>
            <Spacer />
            <Text alignSelf="center" color="#fff">60 min</Text>
          </Stack>

          <Stack p="3" flexDirection="row" bg='#18e7a4' borderRadius="5" marginBottom="1">
            <CheckCircleIcon size="4" mt="0.5" />
            <Text alignSelf="center" color="#fff" fontWeight="bold" >  Remaining Time</Text>
            <Spacer />
            <Text alignSelf="center" color="#fff" >80 min</Text>
          </Stack>

          <Stack p="3" flexDirection="row" bg='#18e7a4' borderRadius="5" marginBottom="8">
            <CheckCircleIcon size="4" mt="0.5" />
            <Text alignSelf="center" color="#fff" fontWeight="bold" > Power Consumed</Text>
            <Spacer />
            <Text alignSelf="center" color="#fff" >30 kWh</Text>
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

        {/* //////////////////////////// */}

        {/* chargingbutton */}

        <View>

          <Button size="sm" height="50" width="200" alignSelf="center" backgroundColor={bton ? 'red.500' : '#18E7A4'}
            onPress={() => { handlePress(button); }}
            onClick={() => setBton(true)} >

            {button}

            {/* charginginfo */}

            <>
              <Modal isOpen={confirmSummary} onClose={() => setConfirmSummary(false)} size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Confirm </Modal.Header>
                  <Modal.Body>
                    <Text> Do you want to continue payment </Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button.Group space={2}>
                      <Button
                        variant="ghost"
                        colorScheme="blueGray"
                        onPress={() => {
                          setConfirmSummary(false)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onPress={() => {
                          setShowTransaction(true)
                        }}
                      >
                        Continue
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>



              <Modal isOpen={showTransaction} onClose={() => setShowTransaction(false)} size="lg">
                <Modal.Content maxWidth="350">
                  <Modal.CloseButton />
                  <Modal.Header>Summary</Modal.Header>
                  <Modal.Body>
                    <VStack space={3}>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Total power</Text>
                        <Text color="blueGray.400">20 kWh</Text>
                      </HStack>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Total Time</Text>
                        <Text color="blueGray.400">30 min</Text>
                      </HStack>
                      <HStack alignItems="center" justifyContent="space-between">
                        <Text fontWeight="medium">Total Amount</Text>
                        <Text color="green.500">150 Rs.</Text>
                      </HStack>
                    </VStack>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      flex="1"
                      onPress={() => {
                        setShowTransaction(false)
                        setConfirmSummary(false)
                        navigation.navigate('History')
                      }}
                    >
                      Continue
                    </Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>

            </>

          </Button>


          {/* //////////////////////////// */}


        </View>

      </View>

    </SafeAreaView>

    </NativeBaseProvider>
  );
}


// onPress={()=>navigation.navigate('SignIn')}