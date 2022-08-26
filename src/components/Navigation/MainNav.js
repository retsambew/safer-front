import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHome from "../Home/userhome.js";
import Home from "../Home/index.js";
import Login from "../auth/login.js";
import SignUp from "../auth/signup";
import Upload from "../Upload";

const MainNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="UserHome" headersMode="none">
      <Stack.Screen name="UserHome" component={UserHome} headerShown={false} />
      <Stack.Screen name="Home" component={Home} headerShown={false} />
      <Stack.Screen name="Login" component={Login} headerShown={false} />
      <Stack.Screen name="SignUp" component={SignUp} headerShown={false} />
      <Stack.Screen name="Upload" component={Upload} headerShown={false} />
    </Stack.Navigator>
  );
};

export default MainNav;
