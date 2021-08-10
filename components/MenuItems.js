import React from 'react'
import Container from './Container';
import { AntDesign, Entypo, MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity,View,Text,Image,Alert } from 'react-native';
import { HELP, HOME, PAYMENTS, SETTINGS } from '../constants/routesName';


const MenuItems=({navigation})=>{
    const handleLogout=()=>{
        navigation.toggleDrawer()
        Alert.alert('logout','are sure to logout',[
            {
                text:'cancel',
                onPress:()=>{},
            },
            {
              text:'ok',
              onPress:()=>{}
          },
        ])
    }
  
const options=[
  {icon:<AntDesign name='home' size={25}></AntDesign>,name:'Home',onPress:()=>{navigation.navigate(HOME)}},
  {icon:<AntDesign name='profile' size={25}></AntDesign>,name:'Profile',onPress:()=>{navigation.navigate(HOME)}},
  {icon:<MaterialIcons name='payment' size={25}></MaterialIcons>,name:'payments',onPress:()=>{navigation.navigate(PAYMENTS)}},
  {icon:<AntDesign name='setting' size={25}></AntDesign>,name:'Settings',onPress:()=>{navigation.navigate(SETTINGS)}},
  {icon:<Entypo name='help'size={25}></Entypo>,name:'Help',onPress:()=>{navigation.navigate(HELP)}},
  {icon:<FontAwesome name='sign-out' size={25}></FontAwesome>,name:'Sign out',onPress:handleLogout},
]
  return(
    <Container>
      <Image source={require('../assets/imgs/success.png')} style={{width:170, height:120, alignSelf:'center', marginTop:10}} />
      <View  style={{marginTop:50}}>
        {options.map(({icon,name,onPress})=>(
          <View key={name} style={{marginHorizontal:5,
            marginVertical:10,
            borderRadius:10,
            height:50,
             backgroundColor:'#C5DCC9'}}>
          <TouchableOpacity  style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,}} onPress={onPress}>
            {icon}
            <Text style={{marginHorizontal:5, fontSize:20}}>{name}</Text>
          </TouchableOpacity>
          </View>
        ))}
      </View>
    </Container>
  )
}
export default MenuItems