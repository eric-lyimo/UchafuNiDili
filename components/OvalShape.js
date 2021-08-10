import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const OvalShape=({text})=>{
    return(
        <View
        style={{
            width:'100%',
            height:150,
            borderBottomEndRadius:70,
            borderBottomStartRadius:70,
            backgroundColor:'#fff',
            transform:[{scaleY:1}],
            

        }}
        >
           {text &&<Text style={styles.text}>{text}</Text> } 
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        color:'black',
        textAlign:'center',
        marginTop:50,
        fontSize:25,
        fontWeight:'100',
        fontStyle:'normal'
    }
})
export default OvalShape;