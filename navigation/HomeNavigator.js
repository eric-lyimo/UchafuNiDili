
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Help from '../screens/Help';
import Settings from '../screens/Settings';
import Payments from '../screens/Payments';
import {PAYMENTS,SETTINGS,HELP, UPDATEPASSWORD,HOMESCREEN,QRSCANNER,CAMERA,MAP, HOME} from '../constants/routesName'
import UpdatePassword from '../screens/UpdatePassword';
import HomeScreen from '../screens/Home';
import Map from '../screens/Map'
import QRScanner from '../screens/QRScanner'
import Camera from '../screens/Camera'
import {Text} from 'react-native'

const HomeNavigator =()=>{
    const HomeStack=createStackNavigator()
    return(
      <HomeStack.Navigator screenOptions={{headerShown:true}} initialRouteName={HOME}>
        <HomeStack.Screen name={HOMESCREEN} component={HomeScreen} ></HomeStack.Screen>
        <HomeStack.Screen name={CAMERA} component={Camera}></HomeStack.Screen>
        <HomeStack.Screen name={QRSCANNER} component={QRScanner}></HomeStack.Screen>
        <HomeStack.Screen name={MAP} component={Map}></HomeStack.Screen>
        <HomeStack.Screen name={PAYMENTS} component={Payments}></HomeStack.Screen>
        <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        <HomeStack.Screen name={UPDATEPASSWORD} component={UpdatePassword}></HomeStack.Screen>
        <HomeStack.Screen name={HELP} component={Help}></HomeStack.Screen>
      </HomeStack.Navigator>
      )
    }
export default HomeNavigator