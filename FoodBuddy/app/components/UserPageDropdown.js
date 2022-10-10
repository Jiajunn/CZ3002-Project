import DropDownPicker from "react-native-dropdown-picker"
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState, useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

const UserPageDropDown = () =>{
    const {logout} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
     const [items, setItems] = useState([
    {label: 'Edit Profile', value: 'edit'},
    {label: 'Logout', value: 'logout'}
    ]);
    const showAlert = () => {
        Alert.alert(
            "Alert",
            "Confirm Logout?",
            [
              {
                text: "Confirm",
                onPress: () => {logout()},
                style: "default",
              },
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel",
              },
            ],
          )};
    return(
        <DropDownPicker
          style={{ borderColor:"transparent", backgroundColor:"transparent"}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          ArrowUpIconComponent={()=> <Ionicons name="ellipsis-vertical-sharp" size={30} color="white"></Ionicons>}
          ArrowDownIconComponent={()=> <Ionicons name="ellipsis-vertical-sharp" size={30} color="white"></Ionicons>}
          containerStyle={{width:100, marginLeft:"70%"}}
          dropDownContainerStyle={{borderColor:"transparent", zIndex:999, backgroundColor:"transparent", marginTop:40}}
          placeholderStyle={{display:"none"}}
          labelStyle={{display:"none"}}
          closeAfterSelecting={true}
          showTickIcon={false}
          onSelectItem={(item) => {
            if(item.value == "logout"){
                showAlert();
            }
            else{

            }
          }}
        ></DropDownPicker>
    )
}

export default UserPageDropDown;