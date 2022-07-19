import React from 'react';
import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { THEME } from './src/styles/theme'
import { Routes } from './src/routes';
import {Loading} from './src/components/Loading';

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={ THEME }>
    <StatusBar
     bar-Style='ligth-content'
     backgroundColor='transparent'
     translucent/>

      {fontsLoad ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

