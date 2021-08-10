import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import CustomButton from '../components/Button';
import Container from '../components/Container';
import OvalShape from '../components/OvalShape';

const UpdatePassword=()=>{
  const {navigate}=useNavigation()
  const [value,onChangeText]=React.useState('')
    return(
      <Container >
          <OvalShape tittle='Update password'/>
            <View style={{height:20}}></View>
            <Input 
            onChangeText={(text)=>onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            placeholder='Old Password'
            />
             <Input 
            onChangeText={(text)=>onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            placeholder='New Password'
            />
            <Input 
            onChangeText={(text)=>onChangeText(text)}
            value={value}
            icon={<Text>HIDE</Text>}
            iconPosition='right'
            placeholder='Retype New Password'
            />
             <CustomButton tittle='Change' loading={false} disabled={false} onPress={()=>{
            navigate(LOGIN)
          }}></CustomButton>
      </Container>
    )
}

export default UpdatePassword