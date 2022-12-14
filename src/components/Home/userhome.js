import React, { useState, useRef, useEffect, createRef } from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Switch,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export const App = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const reports = [
    {
      uid: user,
      score: "97",
      status: "accepted",
      acceptedServices: [],
      rejectedServices: [],
      unknownServices: [],
    },
    {
      uid: user,
      score: "97",
      status: "rejected",
      acceptedServices: [],
      rejectedServices: [],
      unknownServices: [],
    },
    {
      uid: user,
      score: "97",
      status: "under review",
      acceptedServices: [],
      rejectedServices: [],
      unknownServices: [],
    },
  ];
  const apps = [
    {
      uid: user,
      name: "App1",
      type: "Type1",
      status: reports[0].status,
      cat: "Category1",
      repId: reports[0],
    },
    {
      uid: user,
      name: "App2",
      type: "Type2",
      status: reports[1].status,
      cat: "Category2",
      repId: reports[1],
    },
    {
      uid: user,
      name: "App3",
      type: "Type3",
      status: reports[2].status,
      cat: "Category3",
      repId: reports[2],
    },
  ];
  const user = {
    email: "test@gmail.com",
    pass: "testPass",
    bId: "test123",
    devId: 123,
    orgName: "Test Org",
    apps: apps,
  };
  return (
    <View>
      <View style={stylesheet.headView}>
        <Text style={stylesheet.headText}>Safer</Text>
      </View>
      <View style={stylesheet.mainview}>
        <TextInput
          style={stylesheet.inputBox}
          value={search}
          onChangeText={(e) => setSearch(e)}
          placeholder="Search App"
        />
        {apps.map((app, index) => {
          let compstyle;
          if (app.status == "accepted") {
            compstyle = stylesheet.accepted;
          } else if (app.status == "rejected") {
            compstyle = stylesheet.rejected;
          } else {
            compstyle = stylesheet.unknown;
          }
          return (
            <View style={compstyle}>
              <Text style={stylesheet.appName}>{app.name}</Text>
              <Text style={stylesheet.appData}>Status: {app.status}</Text>
              <TouchableOpacity>
                <Text style={stylesheet.appbtn}>></Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};
const stylesheet = StyleSheet.create({
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
  headText: {
    paddingTop: 30,
    width: 134,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    textTransform: "uppercase",
  },
  mainview: {
    top: -70,
  },
  accepted: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    padding: 18,
    backgroundColor: "rgba(137, 218, 89, 1)",
  },
  rejected: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    padding: 18,
    backgroundColor: "rgba(245, 53, 64, 1)",
  },
  unknown: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    padding: 18,
    backgroundColor: "rgba(248, 179, 52, 1)",
  },
  inputBox: {
    height: 42,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginHorizontal: 30,
    marginVertical: 20,
    paddingLeft: 20,
  },
  appbtn: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    alignSelf: "flex-end",
    top: -45,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 0,
    borderLeftWidth: 1,
  },
  appName: {
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 5,
  },
  addApp: {
    alignSelf: "flex-end",
    backgroundColor: "grey",
    margin: 15,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 40,
    width: 40,
  },
  plus: {
    fontSize: 20,
    fontWeight: "700",
  },

  styleRectangle14: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 360,
    height: 76,
    backgroundColor: "rgba(0, 83, 167, 1)",
  },
  styleRectangle15: {
    position: "absolute",
    left: 15,
    top: 11,
    width: 21,
    height: 30,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  styleGroup3: {
    position: "absolute",
    left: 294.9998779296875,
    top: 11,
    width: 51,
    height: 51,
  },
  styleRectangle19: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 301,
    height: 177,
    borderRadius: 20,
    backgroundColor: "rgba(137, 218, 89, 1)",
  },
  styleAppName: {
    position: "absolute",
    left: 2,
    top: 0,
    width: 73,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 16.4,
  },
  styleStatusAcceptedTypeWebApplicationCategoryChatApp: {
    position: "absolute",
    left: 0,
    top: 31,
    width: 129,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  style87_: {
    position: "absolute",
    left: 19,
    top: 24,
    width: 35,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 18.8,
  },
  styleGroup4: {
    position: "absolute",
    left: 201,
    top: 6,
    width: 66,
    height: 66,
  },
  styleRectangle17: {
    position: "absolute",
    left: 0,
    top: 118,
    width: 278,
    height: 34,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(137, 218, 89, 1)",
  },
  styleDownloadCertificate: {
    position: "absolute",
    left: 71,
    top: 127,
    width: 148,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "left",
    height: "auto",
    lineHeight: 16.4,
  },
  styleServicesUsedMicCamera: {
    position: "absolute",
    left: 0,
    top: 89,
    width: 162,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleGroup7: {
    position: "absolute",
    left: 13,
    top: 15,
    width: 278,
    height: 152,
  },
  styleGroup8: {
    position: "absolute",
    left: 29,
    top: 122,
    width: 301,
    height: 177,
  },
  styleRectangle19Copy1: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 301,
    height: 140,
    borderRadius: 20,
    backgroundColor: "rgba(248, 179, 52, 1)",
  },
  styleAppNameCopy1: {
    position: "absolute",
    left: 2,
    top: 0,
    width: 73,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 16.4,
  },
  styleStatusUnderReviewTypeWebApplicationCategoryChatApp: {
    position: "absolute",
    left: 2,
    top: 31,
    width: 129,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleValidServicesMicCamera: {
    position: "absolute",
    left: 2,
    top: 89,
    width: 167,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleInvalidServicesMicCamera: {
    position: "absolute",
    left: 0,
    top: 104,
    width: 169,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleGroup7Copy1: {
    position: "absolute",
    left: 13,
    top: 10,
    width: 167,
    height: 119,
  },
  styleGroup9: {
    position: "absolute",
    left: 29,
    top: 408,
    width: 301,
    height: 140,
  },
  styleRectangle19Copy2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 301,
    height: 140,
    borderRadius: 20,
    backgroundColor: "rgba(245, 53, 64, 1)",
  },
  styleAppNameCopy2: {
    position: "absolute",
    left: 2,
    top: 0,
    width: 73,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 16.4,
  },
  styleStatusRejectedTypeWebApplicationCategoryChatApp: {
    position: "absolute",
    left: 2,
    top: 31,
    width: 129,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleValidServicesMicCameraCopy1: {
    position: "absolute",
    left: 2,
    top: 89,
    width: 167,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleInvalidServicesMicCameraCopy1: {
    position: "absolute",
    left: 0,
    top: 104,
    width: 169,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleGroup7Copy2: {
    position: "absolute",
    left: 13,
    top: 10,
    width: 167,
    height: 119,
  },
  styleGroup12: {
    position: "absolute",
    left: 29,
    top: 560,
    width: 301,
    height: 140,
  },
  styleRectangle18: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 301,
    height: 79,
    borderRadius: 20,
    backgroundColor: "rgba(137, 218, 89, 1)",
  },
  styleAppNameCopy3: {
    position: "absolute",
    left: 28,
    top: 22,
    width: 73,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
    height: "auto",
    lineHeight: 16.4,
  },
  styleStatusAccepted: {
    position: "absolute",
    left: 28,
    top: 44,
    width: 100,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  style87_Copy1: {
    position: "absolute",
    left: 16,
    top: 20,
    width: 30,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleGroup5: {
    position: "absolute",
    left: 195,
    top: 12,
    width: 55,
    height: 56,
  },
  styleRectangle19Copy3: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 12,
    height: 12,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  styleRectangle20: {
    position: "absolute",
    left: 0,
    top: 6,
    width: 12,
    height: 12,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  styleGroup6: {
    position: "absolute",
    left: 280,
    top: 31,
    width: 12,
    height: 18,
  },
  styleGroup10: {
    position: "absolute",
    left: 29,
    top: 314,
    width: 301,
    height: 79,
  },
  styleRectangle22: {
    position: "absolute",
    left: 9,
    top: 0,
    width: 3,
    height: 22,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleRectangle23: {
    position: "absolute",
    left: 0,
    top: 9,
    width: 22,
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  styleGroup11: {
    position: "absolute",
    left: 310,
    top: 751,
    width: 22,
    height: 22,
  },
  styleImage20: {
    position: "absolute",
    left: 7,
    top: 755,
    borderRadius: 10,
    width: 37,
    height: 37,
  },
  styleSafer: {
    position: "absolute",
    left: 74,
    top: 18,
    width: 97,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    height: "auto",
    lineHeight: 35.2,
  },
  styleRectangle24: {
    position: "absolute",
    left: 258,
    top: 479,
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 1)",
  },
  styleNeedHelp_: {
    position: "absolute",
    left: 268,
    top: 492,
    width: 51,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "Arial_400Regular",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "left",
    height: "auto",
    lineHeight: 14.1,
  },
  styleStylename: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 800,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

export default App;
