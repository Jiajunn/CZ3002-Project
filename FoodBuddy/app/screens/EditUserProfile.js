import { View, Text, StyleSheet, TextInput, Pressable, Alert, ScrollView, TouchableWithoutFeedback, Keyboard} from "react-native"
import CustomCheckBox from "../components/CustomCheckBox"
import SmokingCheckBox from "../components/SmokingCheckBox"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

const EditUserProfile = () =>{
  const {userId} = useContext(AuthContext);
  const navigation = useNavigation();
  const route = useRoute();

  const {user} = route.params;

  const[height, setHeight] = useState(user.height);
  const[weight, setWeight] = useState(user.weight);
  const chronicDiseases = user.chronicDiseases; 
  const [arthritis, setArthritis] = useState(chronicDiseases.includes("Arthritis"))
  const [cancer, setCancer] = useState(chronicDiseases.includes("Cancer"))
  const [alzeimers, setAlzeimers] = useState(chronicDiseases.includes("Alzeimers"))
  const [osteoporosis, setOsteoporosis] = useState(chronicDiseases.includes("Osteoporosis"))
  const [diabeties, setDiabeties] = useState(chronicDiseases.includes("Diabetes"))
  const [heartDiesease, setHeartDisease] = useState(chronicDiseases.includes("Heart Disease"))
  const [respiratoryDiesease, setRespiratoryDisease] = useState(chronicDiseases.includes("Respiratory Disease"))
  const [obesity, setObesity] = useState(chronicDiseases.includes("Obesity"))
  const [diseaseArray, setDiseaseArray] = useState(chronicDiseases)

  const [yes, setYes] = useState(user.smokingStatus == "Yes");
  const [no, setNo] = useState(user.smokingStatus== "No");
  const [smokingString, setSmokingString] = useState(yes ? "Yes" : "No");

  const handleSmokingClick =(textValue, setCheckbox, isChecked, isOtherChecked, setIsOther, setSmokingString)=>{
    if(textValue!= smokingString){
      setCheckbox(!isChecked);
      setIsOther(!isOtherChecked);
      setSmokingString(textValue);
    }
  }

  const handleClick =(textValue, setCheckbox, isChecked)=>{
     diseaseArray.includes(textValue) ? setDiseaseArray(diseaseArray => diseaseArray.filter(i=> i !=textValue)) : setDiseaseArray([...diseaseArray, textValue]);
     setCheckbox(!isChecked);
  }
  const showAlert = () => {
    Alert.alert(
        "Alert",
        "Confirm update details?",
        [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => {
              fetch(`http://${IpAddress}:8080/api/user/${userId}/update`,{
                method: 'PUT',
                headers:{
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ height: parseInt(height, 'decimal')
                                      , weight: parseInt(weight, 'decimal')
                                      , chronicDiseases: diseaseArray.toString()
                                      , smokingStatus: smokingString})
              })
              .then((res)=>{
                return res.json();
              })
              .then((result) => {
                console.log(result);
                navigation.navigate("UserProfile");
              })
            }
            ,
            style: "default",
          }
        ],
      )};
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container} >
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Edit Profile</Text>
          </View>
          <ScrollView style={{marginLeft:30}}>
            <View>
              <Text style={styles.header}>Weight</Text>
              <View style={styles.inputView}>
                <TextInput 
                  style={styles.TextInput}
                  placeholder={String(weight)}
                  value={weight}
                  onChangeText={setWeight}
                  placeholderTextColor="#003f5c"
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View>
              <Text style={styles.header}>Height</Text>
              <View style={styles.inputView}>
                <TextInput 
                  style={styles.TextInput}
                  value={height}
                  placeholder={String(height)}
                  onChangeText={setHeight}
                  keyboardType="number-pad"
                  placeholderTextColor="#003f5c"
                />
              </View>
            </View>

            <View>
              <Text style={styles.header}>Chronic Diseases</Text>
              <CustomCheckBox handleClick={handleClick} isChecked={cancer} setCheckbox={setCancer}textValue="Cancer" ></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={alzeimers} setCheckbox={setAlzeimers}textValue="Alzeimers"></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={osteoporosis} setCheckbox={setOsteoporosis}textValue="Osteoporosis"></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={diabeties} setCheckbox={setDiabeties}textValue="Diabetes"></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={heartDiesease} setCheckbox={setHeartDisease}textValue="Heart Disease"></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={respiratoryDiesease} setCheckbox={setRespiratoryDisease}textValue="Respiratory Disease"></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={obesity} setCheckbox={setObesity}textValue="Obesity"></CustomCheckBox>
              <CustomCheckBox handleClick={handleClick} isChecked={arthritis} setCheckbox={setArthritis}textValue="Arthritis" ></CustomCheckBox>
            </View>

            <View>
              <Text style={styles.header}>Smoking Status</Text>
              <View style={{flexDirection:"row"}}>
                <SmokingCheckBox textValue="Yes" isChecked={yes} setCheckbox={setYes} handleClick={handleSmokingClick} isOtherChecked={no} setIsOther={setNo} setSmokingString={setSmokingString}></SmokingCheckBox>
                <SmokingCheckBox textValue="No" isChecked={no} setCheckbox={setNo} handleClick={handleSmokingClick} isOtherChecked={yes} setIsOther={setYes} setSmokingString={setSmokingString}></SmokingCheckBox>
              </View>

              <Pressable
              style={{
                backgroundColor: "#8F9467",
                width: 235,
                height: 45,
                marginTop: 30,
                marginBottom:30
              }}
              onPress={()=> showAlert()}>
              <Text style={{ textAlign: "center", height: 50, fontSize: 20, flex: 1, color:"white", marginTop:8 }}>Update my profile</Text>
            </Pressable>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    padding: 0,
  },
  banner: {
    backgroundColor: "#8F9467",
    width: "100%",
    height: "11%",
    flexDirection: "row",
    paddingTop: "5%",
  },
  bannerText: {
    fontSize: 30,
    color: "white",
    paddingLeft: 25,
    marginBottom: 10,
  },
  TextInput: {
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 8,
    marginLeft: 20,
  },
  header: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    marginBottom: 13,
  },
  inputView: {
    backgroundColor: "#F3EDED",
    borderRadius: 30,
    width: 235,
    height: 45,
    marginBottom: 20,
    alignItems: "flex-start",
  },
})

export default EditUserProfile;