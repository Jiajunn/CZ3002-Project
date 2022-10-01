import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodayScreen from "../screens/TodayScreen";
const Stack = createNativeStackNavigator();


const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Today Screen" component={TodayScreen} />
      </Stack.Navigator>
    );
  };

  export default AppStack; 
