import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  
  function handleInputGoal(val){
    setEnteredText(val);
  }

  function addGoal(val){
    setGoals((prevVal)=>[...prevVal,enteredText]);
    setEnteredText("");
  }

  return (
    <>
      {/* <StatusBar style='auto'/> */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
           placeholder="Add your task" 
           style={styles.textField}
           value = {enteredText}
           onChangeText = {handleInputGoal}
          />
          <Button 
           title="Add Task"
           onPress = {addGoal} 
           />
        </View>
        <View style={styles.goalContainer}>
          {goals.map((goal) => {
            return(
              <View style = {styles.goalItem}>
              <Text style = {styles.goalText}>
                {goal}
              </Text>
              </View>
            )
          })}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  textField: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalContainer: {
    flex: 8,
  },
  goalItem:{
    borderRadius : 6,
    padding : 8,
    margin : 8,
    backgroundColor : "#5e0acc"
  },
  goalText : {
    color : '#ffffff'
  }
});
