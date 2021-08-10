import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './navigation';
import GlobalProvider from './context/Provider';

export default App=()=>{
  return(
    <GlobalProvider>
       <AppNavContainer/>
    </GlobalProvider>
 
  )
 }