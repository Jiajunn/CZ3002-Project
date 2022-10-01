import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./app/components/Tabs";
import LoginScreenStack from "./app/screens/LoginScreen";
import global from "./global";

export default function App() {
  return (
    <NavigationContainer>
      <LoginScreenStack></LoginScreenStack>
      {/* <Tabs></Tabs> */}
    </NavigationContainer>
  );
}
