import HomeComponent from '../components/HomeComponent';
import React from 'react';
import { Entypo,MaterialIcons,AntDesign } from '@expo/vector-icons';
import { HELP, PAYMENTS, SETTINGS,MAP,QRSCANNER,CAMERA } from '../constants/routesName';
import { Text, View,StyleSheet } from 'react-native';

const PaymentMethods=()=>{
    return(
    <View>
        <Text style={styles.heading}>Please Select any</Text>
        <HomeComponent tittle1='M-pesa' tittle2='TigoPesa' ROUTE1={CAMERA} ROUTE2={MAP}
       
        />
        <HomeComponent tittle1='Airtel ' tittle2='T-Pesa' ROUTE1={QRSCANNER} ROUTE2={PAYMENTS}
    
        />
        <HomeComponent tittle1='PayPal' tittle2='Halopesa' ROUTE1={SETTINGS} ROUTE2={HELP}
  
      />
      <HomeComponent tittle1='Visa' tittle2='Mastercard' ROUTE1={SETTINGS} ROUTE2={HELP}
      
      />
      
      
    </View>
    )
}
const styles=StyleSheet.create({
    heading:{
        fontSize:18,
        fontWeight:'400',
        marginBottom:40,
        textAlign:"center"
    }
})

export default PaymentMethods