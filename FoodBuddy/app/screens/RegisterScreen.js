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
import DropDownPicker from "react-native-dropdown-picker";

export default function RegisterScreen(props) {
  const { user, setUser } = useContext(RegisterContext);
  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Prefer not to say", value: "Prefer not to say" },
  ]);

  const handleChange = (text, name) => {
    console.log(text, name);
    setUser((prev) => ({ ...prev, [name]: text }));
    console.log(user);
  };
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    const curDateString = currentDate.toISOString().slice(0, 10);
    setDate(currentDate);
    setUser((prev) => ({ ...prev, date: curDateString }));
    console.log(user);
    setShow(true);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Register</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
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
        </View>

        <View style={{ height: "70%", paddingBottom: "10%" }}>
          <ScrollView
            style={{ width: "100%", paddingLeft: 20 }}
            nestedScrollEnabled={true}
            contentContainerStyle={{ alignItems: "center" }}
          >
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
            <View style={{ width: "100%" }}>
              <Text
                style={{ paddingBottom: 10, fontSize: 17, paddingLeft: 65 }}
              >
                Date of Birth:
              </Text>
              <View style={{ width: "100%", alignItems: "center" }}>
                <Pressable onPress={showDatepicker} style={styles.inputView}>
                  {show && (
                    <View
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <DateTimePicker
                        style={{ width: "70%" }}
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                      />
                    </View>
                  )}
                </Pressable>
              </View>
            </View>
            <View style={{ width: "70%" }}>
              <Text style={styles.text}>Gender:</Text>
              <DropDownPicker
                style={{
                  backgroundColor: "#F3EDED",
                  borderColor: "transparent",
                  borderRadius: 30,
                }}
                placeholder="Please select your gender"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                listMode="SCROLLVIEW"
                onChangeValue={() => {
                  handleChange(value, "gender");
                }}
              />
            </View>
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
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  TextInput: {
    height: 50,
    flex: 1,
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
  text: {
    paddingBottom: 10,
    fontSize: 17,
    paddingLeft: 7,
  },
});
