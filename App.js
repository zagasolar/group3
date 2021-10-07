import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View, Image, SafeAreaView, } from 'react-native';
import { Header} from 'react-native-elements';
// import { MaterialCommunityIcons , Ionicons ,AntDesign} from '@expo/vector-icons';
import {
  useAnimate,
  useAnimateSequence,
  useAnimateParallel,

} from '@rootstrap/react-native-use-animate';

import {  NativeBaseProvider, Progress, Heading, Box } from 'native-base';

export default function App() {
  const solarAnimationX = useAnimate({
    fromValue: 20,
    toValue: 215,
    animate: false
  });
  const solarAnimationXRH = useAnimate({
    fromValue: 220,
    toValue: 110,
    animate: false
  });
  const solarAnimationY = useAnimate({
    fromValue: 0,
    toValue: 390,
    bounce: false,
    animate: false,
  });
  const solarAnimation1 = <Animated.View
style={[
  styles.solarBox,
  {
    left: solarAnimationX.animatedValue,

  },
]}/> ;
const solarAnimation2 = <Animated.View
style={[
  styles.solarBox,
  {
    left: solarAnimationXRH.animatedValue,
    top : solarAnimationY.animatedValue,
   // left : solarAnimationZ.animatedValue
  },
]}/> ;
  return (

<View style={styles.container}>
<View style={{flexDirection:'row' , margin:10, borderColor: "grey",  justifyContent:'space-evenly',marginVertical:20 , marginHorizontal:20}}>  
        <View>
          <Text>Charging Station</Text>

          <Image source={require('./assets/chargest.png')} size={70}  flex={2} aspectRatio={0.9} resizeMode={'contain'}/>
        </View>
          
        <View style={{marginTop:35}}>
        {/* borderBottomWidth: 1 */}
        { solarAnimation1 }
        { solarAnimation2 }
        </View>
        
        <View style={styles.hline1} >
        </View> 
        <View>
        <Text>Car</Text>
        <Image source={require('./assets/ecar.png')} size={70} flex={3} aspectRatio={1} resizeMode={'contain'}/>
        </View>

      </View>

      <View>

      </View>
      <NativeBaseProvider>
      <Box w="90%">  
      <Heading size="md">  Charging</Heading>  
      <Progress colorScheme="primary" bg="cyan.200" mb="4" value={30} mx="4" />
      </Box>
      
      <View style={{ margin:10}}>
        <Header placement="left"
                    backgroundColor='#18E7A4'
                    leftComponent={{ icon: 'battery-full', color: 'white' }}
                    centerComponent={{ text: 'Status', style: { color: '#fff',fontSize:18 } }}
                    rightComponent={{ text: " charging", style: { color: '#fff' , fontSize:18} }}/>

        <Header placement="left"
                    backgroundColor='#18E7A4'
                    leftComponent={{ icon: 'bolt', color: 'white' }}
                    centerComponent={{ text: 'Estimated-Time', style: { color: '#fff',fontSize:18 } }}
                    rightComponent={{ text: "--:--", style: { color: '#fff' , fontSize:18} }}/>    
      
        <Header placement="left"
                   backgroundColor='#18E7A4'
                    leftComponent={{ icon: 'bolt', color: 'white' }}
                    centerComponent={{ text: 'Time Remaining (Full)', style: { color: '#fff',fontSize:18 } }}
                    rightComponent={{ text: "--:--", style: { color: '#fff' , fontSize:18} }}/>

         <Header placement="left"
                    backgroundColor='#18E7A4'
                    leftComponent={{ icon: 'bolt', color: 'white' }}
                    centerComponent={{ text: 'Total Power Consumed', style: { color: '#fff',fontSize:18 } }}
                    rightComponent={{ text: "-- Kw", style: { color: '#fff' , fontSize:18} }}/>  
                  
      </View>
      </NativeBaseProvider>
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  hline1: {
    backgroundColor: 'grey',
    height: 2,
    width: 110,
    marginVertical:80

  },
});
