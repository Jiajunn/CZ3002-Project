import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet } from "react-native";

const CustomCheckBox = ({ textValue, isChecked, setCheckbox, handleClick }) => {
  return (
    <BouncyCheckbox
      style={[
        { backgroundColor: isChecked ? "#8F9467" : "white" },
        styles.inputView,
      ]}
      iconStyle={{ display: "none" }}
      innerIconStyle={{ borderWidth: 0 }}
      text={textValue}
      textStyle={styles.TextInput}
      onPress={() => {
        handleClick(textValue, setCheckbox, isChecked);
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputView: {
    justifyContent: "center",
    borderRadius: 30,
    width: 235,
    height: 45,
    marginBottom: 10,
    alignItems: "flex-start",
    borderWidth: 3,
  },
  TextInput: {
    color: "black",
    fontSize: 20,
    flex: 1,
    paddingVertical: 8,
    textDecorationLine: "none",
  },
});

export default CustomCheckBox;
