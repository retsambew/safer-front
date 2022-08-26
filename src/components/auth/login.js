import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setUser } from "../../data";

export const App = ({ navigation }) => {
  const [obj, setObj] = useState({
    email: "",
    pass: "",
  });

  const login = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    };
    fetch("http://localhost:5000/users/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUser(data);
          alert("Welcome User!");
          navigation.navigate("Home");
        } else {
          alert("ERR: No user with this email");
        }
      })
      .catch((err) => alert(err));
  };

  const redirectSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={stylesheet.mainView}>
      <View style={stylesheet.headPad} />
      <View style={stylesheet.headView}>
        <Text style={stylesheet.logoText}>Safer</Text>
      </View>
      <View style={stylesheet.formView}>
        <View style={stylesheet.infoView}>
          <Text style={stylesheet.heading}>Login</Text>
          <Text style={stylesheet.subheading}>
            Please Enter the following details to Login
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

        <TouchableOpacity style={stylesheet.btn} onPress={() => login()}>
          <Text style={stylesheet.btnText}>Login</Text>
        </TouchableOpacity>
        <Text style={stylesheet.createAcc}>
          Don’t have an account?
          <TouchableOpacity onPress={() => redirectSignUp()}>
            <Text style={stylesheet.link}> Create one!</Text>
          </TouchableOpacity>
        </Text>

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
    fontSize: 42,
    textTransform: "uppercase",
  },
  formView: {
    top: -80,
  },
  infoView: {
    margin: 15,
    marginBottom: 10,
    marginTop: 30,
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
  createAcc: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    marginLeft: 40,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
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
    borderRadius: 20,
    position: "absolute",
    right: -10,
    top: -10,
  },
  ball2: {
    backgroundColor: "rgba(248, 179, 52, 1)",
    height: 25,
    width: 25,
    borderRadius: 20,
    position: "absolute",
    left: -6,
    top: 305,
  },
  footView: {
    left: -5,
    height: 70,
    width: Dimensions.get("window").width + 10,
    borderTopLeftRadius: Dimensions.get("window").width / 2,
    borderTopRightRadius: Dimensions.get("window").width / 2,
    backgroundColor: "rgba(0, 83, 167, 1)",
    alignItems: "center",
  },
});

export default App;
