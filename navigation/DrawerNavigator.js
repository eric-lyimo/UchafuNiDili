
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import MenuItems from '../components/MenuItems';

const getContent=(navigation)=>{
  return(
    <MenuItems navigation={navigation}></MenuItems>
  )
}

const DrawerNavigator =()=>{
    const Drawer=createDrawerNavigator()
    return(
      <Drawer.Navigator drawerType='slide' drawerContent={({navigation})=>getContent(navigation)}>
        <Drawer.Screen 
        name="Home"
        component={HomeNavigator}
        />
      </Drawer.Navigator>
      )
    }
export default DrawerNavigator