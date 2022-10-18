import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfileScreen from "../screens/UserProfileScreen";
import EditUserProfile from "../screens/EditUserProfile";
const Stack = createNativeStackNavigator(); 
const UserProfileStack = () => {
    return(
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="UserProfile" component={UserProfileScreen}></Stack.Screen>
            <Stack.Screen name="EditUserProfile" component={EditUserProfile}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default UserProfileStack;