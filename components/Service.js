import HomeComponent from '../components/HomeComponent';
import React from 'react';
import { Entypo,MaterialIcons,AntDesign } from '@expo/vector-icons';
import { HELP, PAYMENTS, SETTINGS,MAP,QRSCANNER,CAMERA } from '../constants/routesName';
import { View } from 'react-native';

const Services=()=>{
    return(
    <View>
        <HomeComponent tittle1='Camera' tittle2='Tracking' ROUTE1={CAMERA} ROUTE2={MAP}
        icon1={<Entypo name='camera' size={25}/>}
        icon2={<MaterialIcons name='gps-fixed' size={25}/>}
        />
        <HomeComponent tittle1='QR Scanner' tittle2='Payment' ROUTE1={QRSCANNER} ROUTE2={PAYMENTS}
        icon1={<AntDesign name='qrcode' size={25}/>}
        icon2={<MaterialIcons name='payments' size={25}/>}
        />
        <HomeComponent tittle1='Settings' tittle2='Help' ROUTE1={SETTINGS} ROUTE2={HELP}
        icon1={<AntDesign name='setting' size={25} color='black'/>}
        icon2={<MaterialIcons name='help' size={25}/>}
      />
      
    </View>
    )
}
export default Services