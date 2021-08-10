import React from 'react';
import { StyleSheet, View ,Text} from "react-native";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeComponent=({tittle1,tittle2,icon1,icon2,ROUTE1,ROUTE2})=>{
    const {navigate}=useNavigation()
return (
    <View style={styles.container}>
        <View style={styles.home}>
            <View style={styles.button}>
                <TouchableOpacity onPress={()=>{navigate(ROUTE1)}}>
                    {icon1 && <View style={styles.icon}>{icon1}</View>}
                   {tittle1 &&<Text style={styles.tittle}>{tittle1}</Text> } 
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity  onPress={()=>{navigate(ROUTE2)}}>
                    {icon2 && <View style={styles.icon}>{icon2}</View>}
                    {tittle2 &&<Text style={styles.tittle}>{tittle2}</Text>}
                </TouchableOpacity>
            </View>   
        </View>
    </View>
     
)
}
const styles=StyleSheet.create({
    container:{
        padding:10
    },
    home:{
        flexDirection:'row'
    },
    tittle:{
        color:'black',
        textAlign:'center'
    },
    button:{
        width:130,
        height:60,
        marginHorizontal:20 ,
        backgroundColor:'white',
        borderRadius:25,
        marginTop:10
    },
    icon:{
        alignSelf:'center'
    }
})

export default HomeComponent