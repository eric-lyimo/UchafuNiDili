import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import {HOME, REGISTER} from '../constants/routesName'
import CustomButton from '../components/Button';
import { TouchableOpacity } from 'react-native';


const SignIn =({onSubmit,onChange})=>{
    const {navigate}=useNavigation()
    return(
        <View>
            <Input 
            label='Phone number'
            onChangeText={(value)=>{onChange({name:'phoneNo',value})}}
            icon={<AntDesign name="phone" size={28} color="black"></AntDesign>}
            iconPosition='right'
            placeholder='Enter Phone nmber'
            />
            <Input 
            label='Password'
            onChangeText={(value)=>{onChange({name:'password',value})}}
            icon={<AntDesign name="unlock" size={28} color="black"></AntDesign>}
            iconPosition='right'
            placeholder='Enter your Password'
            />
            <CustomButton tittle='Login' 
            loading={false} 
            disabled={false} 
            onPress={()=>{
                navigate(HOME)
                onSubmit()
            }}>
            </CustomButton>
            <View  style={{flexDirection:'row',marginLeft:70,marginVertical:10}}>
                <Text style={{fontSize:18}}>Do you have an account?</Text>
                <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                <Text style={{fontSize:18,marginLeft:5,color:'blue'}}>Register</Text>
            </TouchableOpacity>
            </View>
         </View>
    )
}
export default SignIn