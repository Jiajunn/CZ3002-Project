import React, {createContext, useState} from 'react'

export const RegisterContext = createContext();
export const RegisterProvider = ({children})=>{
    const [user, setUser] = useState({ 
        username: "", 
        email: "", 
        password: "", 
        firstName: "", 
        lastName: "", 
        height: "", 
        weight: "", 
        date: "", 
        gender: "",
      });

    return(
        <RegisterContext.Provider value={{user, setUser}}>
            {children}
        </RegisterContext.Provider>
    )
}