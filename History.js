import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Animated,
    Pressable,
  } from 'react-native';
import { Box,Text, NativeBaseProvider, Center } from "native-base";
import { TabView, SceneMap } from "react-native-tab-view";
import { Constants } from "expo-constants";
import ChargingHistory from "./ChargingHistory";
import  PaymentHistory  from "./PaymentHistory";

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    charging:  ChargingHistory,
    payment: PaymentHistory
})


export function History() {

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