import React from 'react'
import Container from '../components/Container';
import Info from '../components/Info';
import Services from '../components/Service';
import { useNavigation } from '@react-navigation/native';
import {  Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen=()=>{
  const {setOptions,toggleDrawer}=useNavigation()

 React.useEffect(()=>{
    setOptions({
      headerLeft:()=>
        <TouchableOpacity onPress={()=>{toggleDrawer()}}>
          <Entypo name='menu' size={30} style={{padding:10}}/>
        </TouchableOpacity>
    })
  },[])
    return(
     <Container> 
       <Info username='@eric-Lyimo'></Info>
       <Services/>
     </Container> 
    )
}

export default HomeScreen