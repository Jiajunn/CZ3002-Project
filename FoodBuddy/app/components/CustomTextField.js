import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Text,
} from "react-native";

const CustomTextField = ({
  name,
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {placeholder}: </Text>
      <View style={{ alignItems: "center", width: "100%" }}>
        <TouchableOpacity style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={value}
            autoCapitalize="none"
            onChangeText={(text) => onChangeText(text, name)}
            placeholderTextColor="#003f5c"
            keyboardType={keyboardType}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
    width: "100%",
  },
  text: {
    paddingBottom: 10,
    fontSize: 17,
    paddingLeft: 65,
  },
});

export default CustomTextField;
