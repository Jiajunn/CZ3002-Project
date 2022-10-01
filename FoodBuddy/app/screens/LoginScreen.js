import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Card } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import registerScreen from "./RegisterScreen";
import registerScreen2 from "./RegisterScreen2";
import registerScreen3 from "./RegisterScreen3";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <Card
        style={{
          alignItems: "center",
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 10,
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            textAlign: "center",
            marginBottom: 80,
            fontWeight:500
          }}
        >
          Welcome
        </Text>
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            value= {username}
            onChangeText={setUsername}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </TouchableOpacity>
      </Card>
      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => (LoggedIn = true)}
      >
        <Text style={{ textAlign: "centre", padding: 12, fontSize: 20, fontWeight:500}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={{ textAlign: "centre", padding: 12, fontSize: 20, fontWeight:500}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "#F3EDED",
    padding: 8,
  },
  inputView: {
    width: 200,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  paragraph: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  TextInput: {
    textAlign: "center",
    borderBottomWidth: 1
  },
  buttonn: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    width: 338,
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
