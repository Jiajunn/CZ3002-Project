import * as React from "react";
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
          borderRadius: 20,
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            textAlign: "center",
            marginBottom: 80,
          }}
        >
          Welcome
        </Text>
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
          />
        </TouchableOpacity>
      </Card>
      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => (LoggedIn = true)}
      >
        <Text style={{ textAlign: "centre", padding: 12, fontSize: 20 }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonn}
        onPress={() => navigation.navigate("RegisterScreen1")}
      >
        <Text>Register</Text>
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
    backgroundColor: "#F3EDED",
    borderRadius: 30,
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
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  buttonn: {
    alignItems: "center",
    marginTop: 20,
    marginLeft: 120,
    marginRight: 30,
    borderRadius: 20,
    width: 130,
    height: 45,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
