import React from 'react';
import { StyleSheet, View ,Text,Image} from "react-native";
import { FontAwesome,MaterialIcons,AntDesign } from '@expo/vector-icons';

const Info=({username})=>{
return (
    <View>
        <View style={{ backgroundColor:'#CEE3D9',marginVertical:30,}}>
            <Image source={require('../assets/imgs/success.png')} style={{width:170, height:120, alignSelf:'center'}} />
        </View>
        <View style={{flexDirection:'row',alignItems:'center', marginHorizontal:20,marginVertical:10}}>
            <View><FontAwesome name='user-circle-o' size={30}/></View>
            <View>{username &&<Text style={{fontSize:20,marginHorizontal:5,}}>{username}</Text>}</View>
        </View>
        <View style={{width:'100%',height:70, borderRadius:60, backgroundColor:'#C5DCC9', transform:[{scaleY:1}],}}>
            <View style={styles.home}>
                <View style={styles.button}>
                        <View style={styles.icon}><AntDesign name='barschart' size={25}/></View>
                        <Text style={styles.tittle}>Total mass</Text> 
                </View>
                <View style={styles.button}>
                        <View style={styles.icon}><MaterialIcons name='payment' size={25}/></View>
                        <Text style={styles.tittle}>Total cost</Text>
                </View>  
                <View style={styles.button}>
                        <View style={styles.icon}><MaterialIcons name='history' size={25}/></View>
                        <Text style={styles.tittle}>History</Text>
                </View>  
            </View>
        </View>
        <View style={{marginVertical:40}}><Text style={[styles.tittle,{fontWeight:'100',fontSize:14}]}>Hi, How Can We Serve You Today!</Text></View>
    </View>
    
     
)
}
const styles=StyleSheet.create({
    container:{
        padding:10,
        alignSelf:'center',
        height:150
    },
    home:{
        flexDirection:'row',
        alignSelf:'center',
    },
    tittle:{
        color:'black',
        textAlign:'center'
    },
    button:{
        width:95,
        height:50,
        marginHorizontal:5,
        backgroundColor:'white',
        borderRadius:25,
        marginTop:10
    },
    icon:{
        alignSelf:'center'
    }
})

export default Info