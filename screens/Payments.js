import React from 'react';
import { View } from 'react-native';
import Container from '../components/Container';
import OvalShape from '../components/OvalShape';
import PaymentMethods from '../components/PaymentMetods';

const Payments=()=>{
    return(
     <Container>
         <OvalShape text="Payments Method"/>
         <View style={{marginTop:20}}/>
         <PaymentMethods/>
     </Container> 
    )
}

export default Payments