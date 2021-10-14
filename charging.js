
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {  NativeBaseProvider, Heading, Box, VStack, Spacer, Stack, View } from 'native-base';

import ChargeBtn from '../Screens/ChargeBtn';
import ChargingBar from '../Screens/ChargingBar';
import ChargingAnim from '../Screens/ChargingAnim';
import { ChargeInfo } from '../Screens/ChargeInfo';
import { Platform } from 'react-native';


export default function Charging() {

  const [bton, setBton] = React.useState(false)
  const [showTransaction, setShowTransaction] = React.useState(false)


  
  return (
    <SafeAreaView style={{marginTop:Platform.OS==="android" ? 10: 0}}>
        
    <View>

        <ChargingAnim />

        <ChargingBar bton={bton} setBton={setBton} />

        <ChargeInfo bton={bton} />

        <ChargeBtn bton={bton} setBton={setBton}>
 
        </ChargeBtn>

  </View>

  </SafeAreaView>
  );
}

