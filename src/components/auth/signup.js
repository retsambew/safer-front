import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { user, setUser } from "../../data";

export const SignUp = ({ navigation }) => {
  const [obj, setObj] = useState({
    email: "",
    pass: "",
    bid: "",
    devId: "",
    orgName: "",
  });

  // https://safer-sih.herokuapp.com/
  const submitForm = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    fetch("http://localhost:5000/users/add", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        alert("Data Submitted Successfully!");
        navigation.navigate("Home");
      })
      .catch((err) => alert(err));
  };

  return (
    <View style={stylesheet.mainView}>
      <View style={stylesheet.headPad} />
      <View style={stylesheet.headView}>
        <Text style={stylesheet.logoText}>Safer</Text>
      </View>
      <View style={stylesheet.formView}>
        <View style={stylesheet.infoView}>
          <Text style={stylesheet.heading}>Sign Up</Text>
          <Text style={stylesheet.subheading}>
            Please Enter the following details to create an account
          </Text>
        </View>

        <TextInput
          style={stylesheet.inputBox}
          onChangeText={(e) => setObj({ ...obj, email: e })}
          placeholder="Email"
        />

        <TextInput
          style={stylesheet.inputBox}
          onChangeText={(e) => setObj({ ...obj, pass: e })}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TextInput
          style={stylesheet.inputBox}
          onChangeText={(e) => setObj({ ...obj, bid: e })}
          placeholder="Business id"
        />

        <TextInput
          style={stylesheet.inputBox}
          onChangeText={(e) => setObj({ ...obj, devId: e })}
          placeholder="Developer id"
          keyboardType="numeric"
        />

        <TextInput
          style={stylesheet.inputBox}
          value={obj.orgName}
          onChangeText={(e) => setObj({ ...obj, orgName: e })}
          placeholder="Oranisation's Name"
        />

        <TouchableOpacity style={stylesheet.btn} onPress={() => submitForm()}>
          <Text style={stylesheet.btnText}>SignUp</Text>
        </TouchableOpacity>

        <View style={stylesheet.ball1} />
        <View style={stylesheet.ball2} />
      </View>
      <View style={stylesheet.footView} />
    </View>
  );
};
const stylesheet = StyleSheet.create({
  mainView: {
    justifyContent: "center",
    alignItems: "stretch",
  },
  headPad: {
    height: 50,
    backgroundColor: "rgba(0, 83, 167, 1)",
  },
  headView: {
    top: -80,
    left: -50,
    height: 220,
    width: Dimensions.get("window").width + 100,
    borderBottomLeftRadius: Dimensions.get("window").width,
    borderBottomRightRadius: Dimensions.get("window").width,
    backgroundColor: "rgba(0, 83, 167, 1)",
    alignItems: "center",
    paddingTop: 70,
  },
  logoText: {
    width: 134,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    textTransform: "uppercase",
  },
  formView: {
    top: -80,
  },
  infoView: {
    margin: 15,
    marginBottom: 6,
  },
  heading: {
    width: 77,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 24.6,
  },
  subheading: {
    width: 248,
    color: "rgba(128, 127, 131, 1)",
    fontSize: 12,
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  inputBox: {
    height: 42,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginHorizontal: 30,
    marginVertical: 10,
    paddingLeft: 20,
  },
  btn: {
    height: 42,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(0, 83, 167, 1)",
    marginHorizontal: 30,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  ball1: {
    backgroundColor: "rgba(248, 179, 52, 1)",
    height: 25,
    width: 25,
    borderRadius: 15,
    position: "absolute",
    right: -10,
    top: 5,
  },
  ball2: {
    backgroundColor: "rgba(248, 179, 52, 1)",
    height: 30,
    width: 30,
    borderRadius: 15,
    position: "absolute",
    left: -12,
    top: 305,
  },
  footView: {
    top: -50,
    left: -5,
    height: 70,
    width: Dimensions.get("window").width + 10,
    borderTopLeftRadius: Dimensions.get("window").width / 2,
    borderTopRightRadius: Dimensions.get("window").width / 2,
    backgroundColor: "rgba(0, 83, 167, 1)",
    alignItems: "center",
  },
});

export default SignUp;
