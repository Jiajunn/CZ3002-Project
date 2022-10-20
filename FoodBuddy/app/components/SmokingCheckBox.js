import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet } from "react-native";

 const SmokingCheckBox = ({textValue, isChecked, setCheckbox, handleClick, isOtherChecked, setIsOther, setSmokingString}) =>{
    return(
        <BouncyCheckbox
            style={[{backgroundColor: isChecked ? "#8F9467" : "white"}, styles.inputView]
            }
            innerIconStyle={{borderWidth:0}}
            iconStyle={{display:"none"}}
            text={textValue}
            textStyle={styles.TextInput}
            onPress={()=>{
              handleClick(textValue, setCheckbox, isChecked, isOtherChecked, setIsOther, setSmokingString)
            }}
        />
    )
}


const styles = StyleSheet.create({
    inputView: {
      borderRadius: 30,
      width: 100,
      height: 45,
      marginBottom: 10,
      alignItems: "center",
      borderWidth: 3,
      marginHorizontal: 10
    },
    TextInput: {
      color:"black",
      alignItems:"center",
      height: 50,
      fontSize: 20,
      flex: 1,
      padding: 8,
      marginLeft: 5,
      textDecorationLine:"none"
    },
  });

  export default SmokingCheckBox;