/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from "react";
 import type {Node} from 'react';
 
 import {
   DataContext,
 } from "./src/context";
 import { NavigationContainer } from "@react-navigation/native";
 import MainStack from "./src/navigation/main-navigator";
 
 const App: () => Node = () => {
 
   const [data, setData] = useState([]);
   const [initializing, setInitializing] = useState(false);
 
   return (
     <DataContext.Provider value={{ data, setData }}>
       <NavigationContainer>
           <MainStack />
           {initializing &&
             <Loading />
           }
       </NavigationContainer>
     </DataContext.Provider>
   );
 };
 
 
 export default App;
 