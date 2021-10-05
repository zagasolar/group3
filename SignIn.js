import React from "react";
import { View, Text, TouchableOpacity , StyleSheet } from "react-native";

export default function SignIn({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Maps')}>
        <Text>signin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})