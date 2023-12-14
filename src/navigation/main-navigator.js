import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home/Home";
import Onboarding from "../screens/Home/Onboarding";
import WalletCreate from "../screens/Wallet/WalletCreate";
import Wallet from "../screens/Wallet/Wallet";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        backgroundColor: "transparent",
        opacity: 0.99,
      }}
    >
      <Stack.Screen name="Home" component={Home}
        options={{
          gestureEnabled: false,
        }}
        initialParams={{ init: 1, edit: false, chat: false }}
      />
      <Stack.Screen name="Onboarding" component={Onboarding}
        options={{
          gestureEnabled: false,
        }}
        initialParams={{ init: 1, edit: false, chat: false }}
      />
      <Stack.Screen name="WalletCreate" component={WalletCreate}
        options={{
          gestureEnabled: false,
        }}
        initialParams={{ init: 1, edit: false, chat: false }}
      />
      <Stack.Screen name="Wallet" component={Wallet}
        options={{
          gestureEnabled: false,
        }}
        initialParams={{ init: 1, edit: false, chat: false }}
      />
    </Stack.Navigator>
  )
}

const AppStack = () => {
  const appStack = createStackNavigator();
  return (
      <appStack.Navigator
        screenOptions={{
          headerShown: false,
          backgroundColor: "transparent",
          opacity: 0.99,
        }}
      >
        <appStack.Screen name="Main" component={MainStack} />
      </appStack.Navigator>
  )
}

export default AppStack;
