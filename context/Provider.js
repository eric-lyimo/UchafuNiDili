import React,{createContext, useReducer} from 'react';
import AuthState from './initialState/AuthState';
import authReducer from './reducers/auth';

 export const GlobalContext=createContext()

 const GlobalProvider=({children})=>{
     const [authState, authDispatch] = useReducer(authReducer,AuthState)

     return <GlobalContext.Provider value={{authState,authDispatch}}>
              {children}
           </GlobalContext.Provider>
 }
export default GlobalProvider;