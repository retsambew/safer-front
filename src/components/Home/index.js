import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, Switch, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView } from "react-native";

const Home = ({navigation}) => {
  const reports=[{
    uid:user,
    score: "97",
    status:"accepted",
    acceptedServices:[],
    rejectedServices:[],
    unknownServices:[]
  },
  {
    uid:user,
    score: "97",
    status:"rejected",
    acceptedServices:[],
    rejectedServices:[],
    unknownServices:[]
  },{
    uid:user,
    score: "97",
    status:"under review",
    acceptedServices:[],
    rejectedServices:[],
    unknownServices:[]
  }]
  const apps=[{
    uid:user, name: "App1", type:"Type1", status:reports[0].status,cat:"Category1",repId:reports[0]
  },
  {
    uid:user, name: "App2", type:"Type2", status:reports[1].status,cat:"Category2",repId:reports[1]
  },
  {
    uid:user, name: "App3", type:"Type3", status:reports[2].status,cat:"Category3",repId:reports[2]
  }]
  const user={email:"test@gmail.com",pass:"testPass",bId:"test123",devId:123,orgName:"Test Org",apps:apps}

  const uploadPage = () => {
    navigation.navigate("Upload")
  }
	return (
		<View>
      <View style={stylesheet.headView}>
        <Text style={stylesheet.headText}>Safer</Text>
      </View>
      <View>
        {apps.map((app,index)=>{
          let compstyle;
          if(app.status=="accepted"){
            compstyle=stylesheet.accepted;
          }
          else if(app.status=="rejected"){
            compstyle=stylesheet.rejected;
          }else{
            compstyle=stylesheet.unknown;
          }
          return(
            <View style={compstyle}>
              <Text style={stylesheet.appName}>{app.name}</Text>
              <Text style={stylesheet.appData}>Status: {app.status}</Text>
              <TouchableOpacity>
                <Text style={stylesheet.appbtn}>
                  {">"}
                </Text>
              </TouchableOpacity>
            </View>
        )})}
        <TouchableOpacity style={stylesheet.addApp} onPress={uploadPage}>
          <View>
            <Text style={stylesheet.plus}>+</Text>
          </View>
        </TouchableOpacity>
          {/* <View style={compstyle}>
            <Text style={stylesheet.appName}>{app.name}</Text>
            <Text style={stylesheet.appData}>Status: {app.status}</Text>
            <Text style={stylesheet.appData}>Type: {app.type}</Text>
            <Text style={stylesheet.appData}>Category: {app.cat}</Text>
            <Button /> 
          </View>*/}
      </View>
		</View>
	)
}
const stylesheet = StyleSheet.create({
  headView:{
		width: Dimensions.get('window').width,
		height: 64,
		backgroundColor: "rgba(0, 83, 167, 1)",
    alignItems:"center",
    justifyContent: "center",
    marginBottom: 10
  },
  headText:{
		color: "rgba(255, 255, 255, 1)",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "500",
  },
  accepted:{
    marginHorizontal: 20,
    marginVertical:10,
		borderRadius: 20,
    padding: 18,
		backgroundColor: "rgba(137, 218, 89, 1)",
  },
  rejected:{
    marginHorizontal: 20,
    marginVertical:10,
		borderRadius: 20,
    padding: 18,
		backgroundColor: "rgba(245, 53, 64, 1)",
  },
  unknown:{
    marginHorizontal: 20,
    marginVertical:10,
		borderRadius: 20,
    padding: 18,
		backgroundColor: "rgba(248, 179, 52, 1)",
  },
  appbtn:{
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    alignSelf: "flex-end",
    top: -45,
    padding:5,
    paddingLeft:10,
    paddingRight: 0,
    borderLeftWidth: 1
  },
  appName:{
    fontSize: 16,
    fontWeight:"700",
    paddingBottom:5
  },
  addApp:{
    alignSelf:"flex-end",
    backgroundColor: "grey",
    margin:15,
    padding: 10,
    borderRadius: 20,
    justifyContent:"center",
    alignItems: "center",
    textAlign:"center",
    height:40,
    width: 40
  },
  plus:{
    fontSize: 20,
    fontWeight:"700",
  },
});

export default Home;
