import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../../global';

export const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  //const [userId, setUserId] = useState(null);

  const login =(usernameOrEmail, password) =>{
    if(usernameOrEmail == "" || password == ""){
      alert("Input fields cannot be blank");
    }
    else{
      setIsLoading(true);
      fetch("http://192.168.0.195:8080/api/auth/signin", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail,
          password
        })
      })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setUserToken(result.accessToken);
        //setUserId(result.userId);
        AsyncStorage.setItem('userToken', result.accessToken);
        //AsyncStorage.setItem('userId', result.userId)
      })
      .catch(e =>{
        alert("Login error");
        console.log(`login error: ${e}`);
      })
      setIsLoading(false);
  }
    } 

  const logout =() =>{
    setIsLoading(true);
    setUserToken(null);
    //setUserId(null);
    AsyncStorage.removeItem('userToken');
    //AsyncStorage.removeItem('userId')
    setIsLoading(false);
  }

  const isLoggedIn = async () =>{
    try{
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      //let userId = await AsyncStorage.getItem('userId')
      console.log(userToken);

      if(userToken){
        setUserToken(userToken);
        //setUserId(userId);
      }
      setIsLoading(false);
    } catch(e){
      console.log(`isLoggedIn error: ${e}`);
    }

    useEffect( () => {
      isLoggedIn();
    }, [])
    

  }
  return(
    <AuthContext.Provider value={{login, logout, isLoading, userToken, setIsLoading}}>
      {children}
    </AuthContext.Provider>
  )
}