import { StyleSheet , TouchableOpacity, TextInput} from "react-native";



const CustomTextField =({name, placeholder, value, onChangeText, keyboardType})=>{

    return(
        <TouchableOpacity style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder={placeholder}
              value={value}
              onChangeText={text=> onChangeText(text, name)}
              placeholderTextColor="#003f5c"
              keyboardType={keyboardType}
            />
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "#F3EDED",
        borderRadius: 30,
        width: 235,
        height: 45,
        marginBottom: 20,
        alignItems:"flex-start"
      },
      TextInput: {
        height: 50,
        fontSize: 20,
        flex: 1,
        padding: 8,
        marginLeft: 20,
      }
});


export default CustomTextField; 