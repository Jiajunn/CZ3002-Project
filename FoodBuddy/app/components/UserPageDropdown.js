import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const UserPageDropDown = ({ user }) => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Edit Profile", value: "edit" },
    { label: "Logout", value: "logout" },
  ]);
  const showAlert = () => {
    Alert.alert("Alert", "Confirm Logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Confirm",
        onPress: () => {
          logout();
        },
        style: "default",
      },
    ]);
  };
  return (
    <DropDownPicker
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        borderColor: "transparent",
        backgroundColor: "transparent",
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      ArrowUpIconComponent={() => (
        <Ionicons
          name="ellipsis-vertical-sharp"
          size={35}
          color="white"
        ></Ionicons>
      )}
      ArrowDownIconComponent={() => (
        <Ionicons
          name="ellipsis-vertical-sharp"
          size={35}
          color="white"
        ></Ionicons>
      )}
      containerStyle={{ flex: 1 }}
      dropDownContainerStyle={{
        borderColor: "black",
        backgroundColor: "transparent",
      }}
      placeholderStyle={{ display: "none" }}
      labelStyle={{ display: "none" }}
      closeAfterSelecting={true}
      showTickIcon={false}
      onSelectItem={(item) => {
        if (item.value == "logout") {
          showAlert();
        } else if (item.value == "edit") {
          navigation.navigate("EditUserProfile", { user });
        }
      }}
    ></DropDownPicker>
  );
};

export default UserPageDropDown;
