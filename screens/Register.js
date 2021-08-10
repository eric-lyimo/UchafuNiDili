
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import CircleShapes from '../components/Circles';
import Container from '../components/Container';

import SignUp from '../components/SignUp';

const Register=()=>{
    const [error,setError]=React.useState({})
    const [form,setForm]=React.useState({})
 
    const onChange=({name, value})=>{
        if(value !==""){
            if (name=='password') {
                if (value.length < 6) {
                    setError((prev)=>{
                        return {...prev,[name]:'password must be atleast 6 characters'}
                    })
                } else {
                    setError((prev)=>{
                        return {...prev,[name]:null}
                    })
                }
            } else {
                setError((prev)=>{
                return {...prev,[name]:null}
              })
            }
            
        }
        else{
            setError((prev)=>{
                return {...prev,[name]:'this field is required'}
            })
        }
        setForm({...form,[name]:value})
    }

    const onSubmit=()=>{
       if(!form.email){
           setError((prev)=>{
               return {...prev,email:'provide the correct email'}
           })
       }
       if(!form.userName){
        setError((prev)=>{
            return {...prev,userName:'provide your username'}
        })
        }
        if(!form.phoneNumber){
            setError((prev)=>{
                return {...prev,phoneNumber:'provide a usable phone number'}
            })
        }
        if(!form.password){
            setError((prev)=>{
                return {...prev,password:'provide a strong password'}
            })
        }
    }

    return(
        <Container style={{backgroundColor:"#fff"}}>
            <CircleShapes text1='Hello,' text2='Sign Up !'/>
            <View style={{height:50}}></View>
            <SignUp onChange={onChange} onSubmit={onSubmit} form={form} error={error}/>
        </Container>
    )
}

export default Register