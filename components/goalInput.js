import {useState} from 'react';
import {View,TextInput,Text,Button,Pressable,StyleSheet} from 'react-native';

export default function GoalInput(props){
    return (
        <View style={styles.inputContainer}>
          <TextInput 
           placeholder="Add your task" 
           style={styles
            .textField}
           value = {props.enteredText}
           onChangeText = {props.handleInputGoal}
          />
          {/* <Button 
           title="Add Task"
           onPress = {props.addGoal} 
           /> */}
           <Pressable
               android_ripple={{color : '#D0C176',borderless : false,radius : 41}}
               onPress = {props.addGoal}
               style = {styles.pressButton}
             >
             
                <Text>
                    Add Goal
                </Text>
             
         </Pressable>
           
        </View>
    )
}

const styles = StyleSheet.create({
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
      pressButton : {
        height : 50,
        alignItems : "center",
        justifyContent : "center",
        paddingHorizontal : 8,
        borderRadius : 10,
        backgroundColor : "beige",
      }
});
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