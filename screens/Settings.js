import React from 'react';
import { View,Text } from 'react-native';
import CustomButton from '../components/Button';
import Container from '../components/Container';
import OvalShape from '../components/OvalShape';

const Settings=()=>{
    return(
      <Container>
          <OvalShape tittle='Settings'/>
            <View style={{height:20}}></View>
            <CustomButton tittle='Manage Account' loading={false} disabled={false}></CustomButton>
            <CustomButton tittle='Delete Account' loading={false} disabled={false}></CustomButton>
            <CustomButton tittle='Logout' loading={false} disabled={false}></CustomButton>
      </Container>
    )
}

export default Settings