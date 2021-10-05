import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function SignUp({navigation}) {
  const [values, setValues] = React.useState([
    {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Phone: "",
      ConfirmPassword: "",
      CarNumber: "",
      VinNumber: "",
      Address: "",
    },
  ]);
  console.log(values);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.inputContainer}
          placeholder="First Name"
          onChangeText={(text) => setValues(text)}
          value={values.FirstName}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Last Name"
          onChangeText={(text) => setValues(text)}
          value={values.LastName}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Email"
          onChangeText={(text) => setValues(text)}
          value={values.Email}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Password"
          onChangeText={(text) => setValues(text)}
          value={values.Password}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Confirm Password"
          onChangeText={(text) => setValues(text)}
          value={values.ConfirmPassword}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Phone"
          onChangeText={(text) => setValues(text)}
          value={values.Phone}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Car Number"
          onChangeText={(text) => setValues(text)}
          value={values.CarNumber}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="VIN Number"
          onChangeText={(text) => setValues(text)}
          value={values.VinNumber}
        />
        <TextInput
          style={styles.inputContainer}
          placeholder="Address"
          onChangeText={(text) => setValues(text)}
          value={values.Address}
        />
        <TouchableOpacity
          style={{
            alignSelf: "center",
            backgroundColor: "#DF1D44",
            borderRadius: 20,
            width: "98%",
            height: 40,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              marginTop: 10,
              // fontweight: "bold",
              color: "white",
            }}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
});
