import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import CustomTextField from "../components/CustomTextField";
import { RegisterContext } from "../contexts/RegisterContext";
import { Keyboard } from "react-native";

export default function RegisterScreen(props) {
  const { user, setUser} = useContext(RegisterContext);
  const navigation = useNavigation();

  const handleChange=(text, name)=> {
    console.log(text, name);
    setUser(prev=> ({...prev, [name]: text}))
    console.log(user)
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Card
          style={{
            backgroundColor: "#8F9467",
            height: 140,
            margin: -40,
            marginBottom: 45,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              marginTop: 87,
              marginLeft: 100,
              color: "white",
            }}
          >
            Register
          </Text>
        </Card>
        <ScrollView>
          <Text
            style={{
              fontSize: 25,
              marginLeft: 20,
              fontWeight: "bold",
              marginBottom: 50,
            }}
          >
            Personal Information
          </Text>
          <View style={{ marginLeft: 40 }}>
            <CustomTextField 
              name="username" 
              placeholder="Username" 
              value={user.username} 
              onChangeText={handleChange}
              keyboardType="default">
            </CustomTextField>
            <CustomTextField 
              name="password" 
              placeholder="Password" 
              value={user.password} 
              onChangeText={handleChange}
              keyboardType="default">
            </CustomTextField>
            <CustomTextField 
              name="firstName" 
              placeholder="First Name" 
              value={user.firstName} 
              onChangeText={handleChange}
              keyboardType="default">
            </CustomTextField>
            <CustomTextField 
              name="lastName" 
              placeholder="Last Name" 
              value={user.lastName} 
              onChangeText={handleChange}
              keyboardType="default">
            </CustomTextField>
            <CustomTextField 
              name="email" 
              placeholder="Email" 
              value={user.email} 
              onChangeText={handleChange}
              keyboardType="email-address">
            </CustomTextField>
            <CustomTextField 
              name="height" 
              placeholder="Height(cm)" 
              value={user.height} 
              onChangeText={handleChange}
              keyboardType="number-pad">
            </CustomTextField>
            <CustomTextField 
              name="weight" 
              placeholder="Weight(kg)" 
              value={user.weight} 
              onChangeText={handleChange}
              keyboardType="number-pad">
            </CustomTextField>
            <CustomTextField 
              name="date" 
              placeholder="DOB (YYYY-MM-DD)" 
              value={user.date} 
              onChangeText={handleChange}
              keyboardType="default">
            </CustomTextField>
            <CustomTextField 
              name="gender" 
              placeholder="Gender" 
              value={user.gender} 
              onChangeText={handleChange}
              keyboardType="default">
            </CustomTextField>

            
            <TouchableOpacity
              style={{
                backgroundColor: "#8F9467",
                width: 235,
                height: 45,
                marginTop: 30,
              }}
              onPress={() => {
                Object.values(user).every(i => {
                  if(i == ""){
                    alert("Input fields cannot be empty");
                    return false;
                  }
                  else{
                    console.log(user)
                    navigation.navigate("RegisterScreen2")
                  }})
                }
              }
            >
              <Text
                style={{ textAlign: "center", height: 50, fontSize: 20, flex: 1, color:"white", marginTop:8 }}
              > NEXT
              </Text>
              
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 0,
  },
  inputView: {
    backgroundColor: "#F3EDED",
    borderRadius: 30,
    width: 235,
    height: 45,
    marginBottom: 20,
    alignItems: "left",
  },
  TextInput: {
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
  },
});
