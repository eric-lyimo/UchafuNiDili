
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import {ScrollView,StyleSheet } from 'react-native';

const {height}=Dimensions.get('screen')
const Container = ({style,children})=>{
    return(  
    <SafeAreaView>
        <StatusBar/>
            <ScrollView>
        <View style={[styles.wrapper,style]}>{children}</View>
        </ScrollView>
        
    </SafeAreaView>  
    )
}
const styles=StyleSheet.create({
    wrapper:{
        backgroundColor:'#CEE3D9',
        height,
    
    }
})

export default Container