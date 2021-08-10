
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import {REGISTER,LOGIN, HOME} from '../constants/routesName';
import DrawerNavigator from './DrawerNavigator';


const AuthNavigator =()=>{
    const AuthStack=createStackNavigator()
    return(
      <AuthStack.Navigator screenOptions={{headerShown:false}} initialRouteName={LOGIN}>
        <AuthStack.Screen 
        name={REGISTER}
        component={Register}
        />
        <AuthStack.Screen 
        name={LOGIN}
        component={Login}
        />
        <AuthStack.Screen 
        name={HOME}
        component={DrawerNavigator}
        />
      </AuthStack.Navigator>
      )
    }
export default AuthNavigator