import { GestureHandlerRefContext } from "@react-navigation/stack";
import React from "react";
import {View, Text,TextInput,StyleSheet} from "react-native"


export default Input =({onChangeText,style,value,label,icon,iconPosition,error,...props})=>{
const [focused, setFocused]= React.useState(false)

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
const getBorder=()=>{
  if(error){
    return 'red'
  }
  if(focused){
    return 'blue'
  }
  else if(!error){
    return "grey"
  }
}

  return (
    <View style={{marginLeft:50, marginRight:50, paddingVertical:10}}>
      {label && <Text style={{paddingLeft:30}}>{label}</Text>}

      <View style={[styles.wrapper,{alignItems: icon ? "center":"baseline"},{borderColor:getBorder(), flexDirection:getFlex()}]}>
        <View style={{marginTop:5}}>{icon && icon}</View>

        <TextInput
        style={[styles.textInput, style]}
        onChangeText={onChangeText}
        value={value}
        onFocus={()=>{setFocused(true)}}
        onBlur={()=>{setFocused(false)}}
        {...props}
        />
      </View>
      {error && <Text style={{color:"red",fontSize:12,paddingLeft:10}}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
wrapper:{
  paddingHorizontal:5,
  height:42,
  borderWidth:1,
  borderRadius:10,
  alignItems:"center",
  
},
textInput:{
  flex:1,
  height:'100%',
  
}
})