
import React from 'react';
import { View,Text } from 'react-native';
import CircleShapes from '../components/Circles';
import Container from '../components/Container';
import SignIn from '../components/SignIn';
import Message from '../components/Message';

const Login=()=>{
  const [form,setForm]=React.useState({})

  const onChange=({name,value})=>{
    setForm({...form,[name]:value})
  }
  const onDismiss=()=>{}
  const onSubmit=()=>{
    console.log('>>data',form)
  }
    return(
      <Container style={{backgroundColor:'#fff'}}>
          <CircleShapes text1='Hello,' text2='Welcome Back !'/>
            <View style={{height:'10%'}}></View>
            <SignIn onSubmit={()=>{}} onChange={onChange}></SignIn>
           
      </Container>
    )
}
 
export default Login