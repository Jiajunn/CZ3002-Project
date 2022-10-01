import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export const Router = () => {
    return(
        <NavigationContainer>
            {isSignedIn ? <Tabs></Tabs> : <AuthStack></AuthStack>}
        </NavigationContainer>
    )
}