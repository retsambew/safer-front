import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import base64 from "base64-js";
import { FFileSystem } from "expo";
// import DocumentPicker, { types } from 'react-native-document-picker';
// import RNFetchBlob from 'rn-fetch-blob'

export const App = ({ navigation }) => {
  const [obj, setObj] = useState({
    name: "",
    pass: "",
    bid: "",
    devId: "",
    orgName: "",
  });
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [DocumentPicker.types.pdf],
      });
      setFileResponse(response);
      const fileName = response.uri.replace("file://", "");
      let data = "";
      RNFetchBlob.fs.readStream(fileName, "base64", 4095).then((ifstream) => {
        ifstream.open();
        ifstream.onData((data) => {
          let base64 = `data:${response.type};base64,` + data;
          const param = {
            base64: base64,
            name: response.name,
          };
        });
        ifstream.onError((err) => {
          console.log(err);
        });
      });
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const submitForm = () => {
    alert(obj);
  };

  return (
    <View style={stylesheet.mainView}>
      <View style={stylesheet.headPad} />
      <View style={stylesheet.headView}>
        <Text style={stylesheet.logoText}>Safer</Text>
      </View>
      <View style={stylesheet.formView}>
        <View style={stylesheet.infoView}>
          <Text style={stylesheet.heading}>Upload Your App</Text>
          <Text style={stylesheet.subheading}>
            Please Enter the following details of your app:
          </Text>
        </View>

        <TextInput
          style={stylesheet.inputBox}
          onChangeText={(e) => setObj({ ...obj, name: e })}
          placeholder="App Name"
        />

        <Picker style={stylesheet.picker} itemStyle={stylesheet.pickerText}>
          <Picker.Item label="Type of Product" value="" />
          <Picker.Item label="Type 1" value="val1" />
          <Picker.Item label="Type 2" value="val2" />
        </Picker>

        <Picker style={stylesheet.picker} itemStyle={stylesheet.pickerText}>
          <Picker.Item label="Category" value="" />
          <Picker.Item label="Type 1" value="val1" />
          <Picker.Item label="Type 2" value="val2" />
        </Picker>

        <View style={stylesheet.uploadView}>
          <TouchableOpacity
            style={stylesheet.uploadSection}
            onPress={handleDocumentSelection}
          >
            <Text style={stylesheet.btnText}>Upload T&C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesheet.uploadSection}
            onPress={handleDocumentSelection}
          >
            <Text style={stylesheet.btnText}>Upload Manifest</Text>
          </TouchableOpacity>
        </View>

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
  picker: {
    height: 42,
    marginHorizontal: 30,
    marginVertical: 10,
    paddingLeft: 20,
  },
  pickerText: {
    fontSize: 16,
  },
  uploadView: {
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
  },
  uploadSection: {
    height: 84,
    maxWidth: 110,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1)",
    backgroundColor: "darkorange",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
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

export default App;
