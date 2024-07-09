import {useState} from 'react';
import {View,TextInput,Text,Image,Pressable,StyleSheet,Modal} from 'react-native';
import PressableButton from './customCore/PressableButton';

export default function GoalInput(props){
    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image 
           source = {require("../assets/Images/goal.png")}
           style={styles.goalImage}
          />
        
          <TextInput 
           placeholder="Add your task" 
           style={styles
            .textField}
           value = {props.enteredText}
           onChangeText = {props.handleInputGoal}
          />
         <View style={styles.buttonContainer}>
          <PressableButton title ="Add Goal" pressAction={props.addGoal} pressStyle={styles.pressButton} pressText = {styles.pressText} customRipple={{color : '#ccaef5',borderless : false,radius : 38}}/>
          <PressableButton title ="Cancel" pressAction={props.closeModal} pressStyle={styles.pressButton} pressText = {styles.pressText} customRipple={{color : '#ccaef5',borderless : false,radius : 38}}/>
         </View> 
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textField: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: "70%",
        padding: 8,
        marginRight: 8,
        color: '#120438',
        borderRadius: 4,
        backgroundColor: '#e4d0ff',
      },
      buttonContainer: {
        marginTop : 8,
        flexDirection: 'row',
        alignContent: 'center',
      },
      inputContainer: {
        flex: 1,
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        backgroundColor: '#311b6b',
      },
      pressButton : {
        height : 40,
        width : 75,
        alignItems : "center",
        justifyContent : "center",
        paddingHorizontal : 8,
        borderRadius : 10,
        backgroundColor : "#74559e",
        marginHorizontal :2
      },
      pressText :{
        color : '#bdb1cc'
      },
      goalImage : {
        width : 200,
        height : 200,
      },
});
