import React from 'react';
import { SafeAreaView } from 'react-native';
import CircleShapes from '../components/Circles';
import Container from '../components/Container';
import OvalShape from '../components/OvalShape';

const Camera=()=>{
    return(
     <Container>
         <OvalShape text="Camera"></OvalShape>
     </Container> 
    )
}

export default Camera