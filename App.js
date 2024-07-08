import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import GoalDisplay from "./components/goalDisplay";
import GoalInput from "./components/goalInput";
export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  
  function handleInputGoal(val){
    setEnteredText(val);
  }

  function addGoal(val){
    setGoals((prevVal)=>[...prevVal,{text :enteredText, id : Math.random().toString()}]);
    setEnteredText("");
  }

  function handleRemoveGoal(id){
    setGoals(goals.filter((item)=> item.id!==id));
  }

  return (
    <>
      <StatusBar style='auto'/> 
      <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
          <TextInput 
           placeholder="Add your task" 
           style={styles
            .textField}
           value = {enteredText}
           onChangeText = {handleInputGoal}
          />
          <Button 
           title="Add Task"
           onPress = {addGoal} 
           />
        </View> */}
        {/* <View style={styles.goalContainer}>
          <FlatList
            data = {goals}
            renderItem={(itemData)=>{
              return(
                <View  style = {styles.goalItem}>
                <Text style = {styles.goalText}>
                  {itemData.item.text}
                </Text>
                </View>
              )
            }}
            keyExtractor={(item, index)=>{
                return item.id;
            }}
          /> 
        </View> */}
        <GoalInput enteredText={enteredText} addGoal={addGoal} handleInputGoal={handleInputGoal}/>
        <GoalDisplay goals={goals} handleRemoveGoal = {handleRemoveGoal}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
