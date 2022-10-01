import { NavigationContainer } from "@react-navigation/native";
import LoginScreenStack from "../screens/LoginScreen";
import Tabs from "../components/Tabs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {View, ActivityIndicatior} from "react-native"

export const Router = () => {
    const {isLoading, userToken} = useContext(AuthContext)
    if(isLoading){
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicatior size={'large'}></ActivityIndicatior>
        </View>
    }
    return(
        <NavigationContainer>
            {userToken ? <Tabs></Tabs> : <LoginScreenStack></LoginScreenStack>}
        </NavigationContainer>
    )
}