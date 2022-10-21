import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import CustomTextField from "../components/CustomTextField";
import { RegisterContext } from "../contexts/RegisterContext";
import { Keyboard } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function RegisterScreen(props) {
  const { user, setUser } = useContext(RegisterContext);
  const navigation = useNavigation();

  const handleChange = (text, name) => {
    console.log(text, name);
    setUser((prev) => ({ ...prev, [name]: text }));
    console.log(user);
  };
  const today = new Date(1598051730000);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    const test = currentDate.toISOString().slice(0, 10);
    setShow(false);
    setDate(currentDate);
    setUser((prev) => ({ ...prev, date: test }));
    console.log(user);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Register</Text>
        </View>
        <Text
          style={{
            fontSize: 25,
            paddingTop: 20,
            marginLeft: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Personal Information
        </Text>
        <View style={{ height: "70%", paddingBottom: "10%" }}>
          <ScrollView style={{ width: "100%", paddingLeft: 20 }}>
            <CustomTextField
              name="username"
              placeholder="Username"
              value={user.username}
              onChangeText={handleChange}
              keyboardType="default"
            ></CustomTextField>
            <CustomTextField
              name="password"
              placeholder="Password"
              value={user.password}
              onChangeText={handleChange}
              keyboardType="default"
            ></CustomTextField>
            <CustomTextField
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChangeText={handleChange}
              keyboardType="default"
            ></CustomTextField>
            <CustomTextField
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChangeText={handleChange}
              keyboardType="default"
            ></CustomTextField>
            <CustomTextField
              name="email"
              placeholder="Email"
              value={user.email}
              onChangeText={handleChange}
              keyboardType="email-address"
            ></CustomTextField>
            <CustomTextField
              name="height"
              placeholder="Height(cm)"
              value={user.height}
              onChangeText={handleChange}
              keyboardType="number-pad"
            ></CustomTextField>
            <CustomTextField
              name="weight"
              placeholder="Weight(kg)"
              value={user.weight}
              onChangeText={handleChange}
              keyboardType="number-pad"
            ></CustomTextField>
            <Pressable onPress={showDatepicker} style={styles.inputView}>
              <Text style={styles.TextInput}>
                {date.toLocaleString() == today.toLocaleString()
                  ? "Date of Birth"
                  : date.toISOString().slice(0, 10)}
              </Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}
            </Pressable>
            <CustomTextField
              name="gender"
              placeholder="Gender"
              value={user.gender}
              onChangeText={handleChange}
              keyboardType="default"
            ></CustomTextField>
          </ScrollView>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#8F9467",
              width: 235,
              height: 45,
            }}
            onPress={() => {
              Object.values(user).every((i) => {
                if (i == "") {
                  alert("Input fields cannot be empty");
                  return false;
                } else {
                  console.log(user);
                  navigation.navigate("RegisterScreen2");
                }
              });
            }}
          >
            <Text
              style={{
                textAlign: "center",
                height: 50,
                fontSize: 20,
                flex: 1,
                color: "white",
                marginTop: 9,
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "flex-start",
  },
  TextInput: {
    color: "#003f5c",
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
  },
  banner: {
    backgroundColor: "#8F9467",
    width: "100%",
    height: "11%",
    justifyContent: "flex-end",
    paddingTop: "5%",
  },
  bannerText: {
    fontSize: 30,
    color: "white",
    paddingLeft: 25,
    marginBottom: 10,
  },
});
