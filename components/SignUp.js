
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View ,Text,TouchableOpacity} from 'react-native';
import CustomButton from './Button';
import Input from './Input';
import { LOGIN } from '../constants/routesName';
import { AntDesign,Entypo, FontAwesome } from '@expo/vector-icons';

const SignUp=({onChange, onSubmit, error})=>{
    const {navigate}=useNavigation()
    return(
        <View>
              <Input 
            label='Email'
            icon={<Entypo name="email" size={28} color="black"></Entypo>}
            iconPosition='right'
            placeholder='Enter Email address'
            onChangeText={(value)=>{onChange({name:'email',value})}}
            error={error.email || error.email ?.[0]}
           
            />
             <Input 
            label='Username'
            icon={<AntDesign name="user" size={28} color="black"></AntDesign>}
            iconPosition='right'
            placeholder='Enter username'
            onChangeText={(value)=>{onChange({name:'userName',value})}}
            error={error.userName || error.userName ?.[1]}
            />
             <Input 
            label='Phone number'
            icon={<AntDesign name="phone" size={28} color="black"></AntDesign>}
            iconPosition='right'
            placeholder='Enter Phone number'
            onChangeText={(value)=>{onChange({name:'phoneNumber',value})}}
            error={error.phoneNumber || error.phoneNumber ?.[2]}
            />
             <Input 
            label='Password'
            icon={<AntDesign name="lock" size={28} color="black"></AntDesign>}
            iconPosition='right'
            placeholder='Enter Password'
            onChangeText={(value)=>{onChange({name:'password',value})}}
            error={error.password || error.password ?.[3]}
            />
        <CustomButton 
            tittle='Sign up'
            loading={false} 
            disabled={false}
            icon={<FontAwesome name="sign-in" size={28} color="black"></FontAwesome>}
            iconPosition='right'
            onPress={onSubmit}/>
            <View  style={{flexDirection:'row',marginLeft:70,marginVertical:10}}>
                <Text style={{fontSize:18}}>Do you have an account?</Text>
                <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
                <Text style={{fontSize:18,marginLeft:5,color:'blue'}}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignUp