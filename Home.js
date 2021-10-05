import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Platform,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default function Home({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
      }}
    >
      <ImageBackground
        source={require("../ProjectEV/assets/FrontImage.png")}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      >
        <View style={{ marginTop: 250, alignItems: "center" }}>
          <Text style={{ fontSize: 50, color: "black" }}>Zaga Ev Station</Text>
        </View>
        <View style={{ marginTop: 200 , paddingHorizontal:100}}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 50,
              paddingVertical: 16,
              backgroundColor: "#18e7a4",
              borderRadius: 10,
              marginTop: 15,
              alignItems: "center",
            }}
              onPress={() => navigation.navigate('SignIn')}
          >
            <Text>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 50,
              paddingVertical: 16,
              backgroundColor: "#18e7a4",
              borderRadius: 10,
              marginTop: 15,
              alignItems: "center",
            }}
              onPress={() => navigation.navigate(`SignUp`)}
          >
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
