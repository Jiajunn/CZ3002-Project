import * as React from "react";
import { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import registerScreen from "./RegisterScreen";
import registerScreen2 from "./RegisterScreen2";
import registerScreen3 from "./RegisterScreen3";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import { RegisterProvider } from "../contexts/RegisterContext";
const Stack = createNativeStackNavigator();

function LoginScreenStack() {
  return (
    <RegisterProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={registerScreen} />
          <Stack.Screen name="RegisterScreen2" component={registerScreen2} />
          <Stack.Screen name="RegisterScreen3" component={registerScreen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </RegisterProvider>
  );
}

function LoginScreen(props) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Food Buddy</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
          paddingBottom: 50,
        }}
      >
        Eat Well Live Well
      </Text>
      <View style={styles.credContainer}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Welcome
        </Text>
        <View style={styles.row}>
          <Text style={styles.text}>Your username:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.TextInput}
              autoCapitalize="none"
              placeholder="e.g. patrick123"
              placeholderTextColor="#003f5c"
              value={usernameOrEmail}
              onChangeText={setUsernameOrEmail}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Your password: </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.TextInput}
              placeholder="e.g. ilovemango123"
              placeholderTextColor="#003f5c"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "transparent",
          width: "70%",
        }}
      >
        <TouchableOpacity
          style={styles.buttonn}
          onPress={() => {
            login(usernameOrEmail, password);
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 12,
              fontSize: 20,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonn}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 12,
              fontSize: 20,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  credContainer: {
    height: "50%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    width: "70%",
  },
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#F3EDED",
    padding: 8,
    alignItems: "center",
  },
  inputView: {
    width: "100%",
    height: 45,
    alignItems: "center",
  },
  paragraph: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  TextInput: {
    width: "100%",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonn: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
  },
  row: {
    width: "90%",
    paddingTop: "15%",
  },
  text: {
    fontSize: 17,
    paddingBottom: 10,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 1,
  },
});

export default LoginScreenStack;
