import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext(); 

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  //const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login =(usernameOrEmail, password) =>{
    if(usernameOrEmail == "" || password == ""){
      alert("Input fields cannot be blank");
    }
    else{
      setIsLoading(true);
      fetch(`http://${IpAddress}:8080/api/auth/signin`, {
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
        // setUserToken(result.accessToken);
        setUserId(result);
        // AsyncStorage.setItem('userToken', result.accessToken);
        //AsyncStorage.setItem('userId', result)
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
    //setUserToken(null);
    setUserId(false);
    //AsyncStorage.removeItem('userToken');
    //AsyncStorage.removeItem('userId')
    setIsLoading(false);
  }

  // const isLoggedIn = async () =>{
  //   try{
  //     setIsLoading(true);
  //     //let userToken = await AsyncStorage.getItem('userToken');
  //     let userId = await AsyncStorage.getItem('userId')
  //     console.log(userId);

  //     if(userId){
  //       //setUserToken(userToken);
  //       setUserId(userId);
  //     }
  //     setIsLoading(false);
  //   } catch(e){
  //     console.log(`isLoggedIn error: ${e}`);
  //   }

  //   useEffect( () => {
  //     isLoggedIn();
  //   }, [])
    

  //}
  return(
    <AuthContext.Provider value={{login, logout, isLoading, userId, setIsLoading}}>
      {children}
    </AuthContext.Provider>
  )
}