import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const CircleShapes=({text1,text2})=>{
    return(
        <View
        style={styles.shape}
        >
        <View style={styles.shape2}></View>
        <View style={styles.shape3}></View>

           {text1 &&<Text style={styles.text1}>{text1}</Text> } 
           {text2 &&<Text style={styles.text2}>{text2}</Text> }
        </View>
    )
}

const styles=StyleSheet.create({
    text1:{
        color:'black',
        marginLeft:50,
        marginTop:40,
        fontSize:16,
        fontWeight:'900',
        fontStyle:'normal'
    },
    text2:{
        color:'black',
        marginLeft:50,
        marginTop:0,
        fontSize:14,
        fontWeight:'100',
        fontStyle:'normal'
    },
    shape:{
        width:250,
        height:250,
        borderRadius:150,
        backgroundColor:'#48B162',
        marginLeft:-40,
        marginTop:-35,
        position:"relative"
    },
    shape2:{
        width:110,
        height:100,
        borderRadius:150,
        backgroundColor:'#58D475',
        marginLeft:0,
        marginTop:0,
        position:"absolute",
        left:30,
        top:135,
    },shape3:{
        width:90,
        height:90,
        borderRadius:150,
        backgroundColor:'#68BE7C',
        marginLeft:0,
        marginTop:0,
        position:"absolute",
        left:160,
        top:70,
    },
})
export default CircleShapes;