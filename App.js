import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable } from "react-native";
import { useState } from "react";
import GoalDisplay from "./components/goalDisplay";
import GoalInput from "./components/goalInput";
export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [visible,setVisible] = useState(true);
  
  function handleInputGoal(val){
    setEnteredText(val);
  }

  function addGoal(val){
    setGoals((prevVal)=>[...prevVal,{text :enteredText, id : Math.random().toString()}]);
    setEnteredText("");
    closeModal();
  }

  function handleRemoveGoal(id){
    setGoals(goals.filter((item)=> item.id!==id));
  }

  function closeModal(){
    setVisible(false);
  }

  function addNewGoal(){
    setVisible(true);
  }

  return (
    <>
      <StatusBar style='auto'/> 
      <View style={styles.container}>
        <GoalInput enteredText={enteredText} addGoal={addGoal} handleInputGoal={handleInputGoal} visible={visible} closeModal={closeModal}/>
        <GoalDisplay goals={goals} addNewGoal = {addNewGoal}  handleRemoveGoal = {handleRemoveGoal}/>
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
