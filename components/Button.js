import React from 'react';
import { View } from 'react-native';
import { StyleSheet,Text,Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';

const CustomButton=({tittle,loading,disabled,medium,small,large, icon,iconPosition, style,...props})=>{

    const getColor=()=>{
        if(disabled){
            return 'grey'
        }else{
            return '#68BE7C'
        }
    }
    const getWidth=()=>{
        if(small){
            return 100
        }else if (medium){
            return 150
        }
        else if (large){
            return 250
        }
        else{
            return 150
        }
    }
    const getFlex=()=>{
        if(icon && iconPosition){
          if(iconPosition ==="left"){
            return "row"
          }
          else if(iconPosition==="right"){
            return "row-reverse"
          }
        }
        else{
          return 'row'
        }
      }
    return (
        <View 
        style={[styles.wrapper,{alignItems: icon ? "center":"baseline"},
                {flexDirection:getFlex()},
                {backgroundColor:getColor(), 
                width:getWidth()},
                {marginHorizontal: large? '15%':'28%'}
                ]}>
            <View style={{marginTop:4,marginHorizontal:10}}>{icon && icon}</View>
                <TouchableOpacity loading={loading} {...props}>
                    {tittle && <Text style={[styles.tittle,{marginHorizontal: icon? 6:'32%'}]}>{tittle}</Text>}
                </TouchableOpacity>
        </View>
    )

}
const styles=StyleSheet.create({
    wrapper:{
      borderRadius:20,
      height:45,
      marginTop:10,
    },
    tittle:{
        fontSize:16,
        color:"black",
        marginVertical:10,
        fontWeight:"500"
    }
})

export default CustomButton;