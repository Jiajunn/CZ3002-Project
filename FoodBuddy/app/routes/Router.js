import { NavigationContainer } from "@react-navigation/native";
import LoginScreenStack from "../screens/LoginScreen";
import Tabs from "../components/Tabs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {View, ActivityIndicator} from "react-native"

export const Router = () => {
    const {isLoading, userId, setIsLoading} = useContext(AuthContext)
    if(isLoading){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
            </View>
        )
        
    }
    return(
        <NavigationContainer>
            {userId ? <Tabs></Tabs> : <LoginScreenStack></LoginScreenStack>}
        </NavigationContainer>
    )
}