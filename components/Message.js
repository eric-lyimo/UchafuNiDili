import React from 'react';
import { View } from 'react-native';
import { StyleSheet,Text,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Message=({message,success,error, icon, onDismiss,retry,retryFn})=>{
const [dismissed,setDismissed]=React.useState(false)
    const getColor=()=>{
        if(error){
            return 'red'
        }else{
            return '#B7EFC5'
        }
    }

    return (
    <>
    {dismissed ? null :
        <TouchableOpacity>
            <View style={[styles.wrapper,{backgroundColor:getColor()}]}>
                <Text style={styles.tittle}>{message} </Text>
                {retry && !typeof onDismiss ==='function' && (
                <TouchableOpacity onPress={retryFn}>
                    <Text style={styles.tittle}>retry</Text>
                </TouchableOpacity>)} 
                {typeof onDismiss ==='function' && (
                <TouchableOpacity onPress={()=>{setDismissed(true) 
                onDismiss() }}>
                    <Text style={[styles.tittle,{marginLeft:50, fontSize:24,marginTop:10}]}>X</Text>
                </TouchableOpacity>)} 
            </View>
       </TouchableOpacity>
    }
    </>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        paddingHorizontal:5,
        height:50,
        borderWidth:1,
        borderRadius:10,
        alignSelf:"center",
        width:267,
    },
    tittle:{
        fontSize:16,
        color:"white",
        fontWeight:"500",
        alignSelf:'center'

    }
})

export default Message;