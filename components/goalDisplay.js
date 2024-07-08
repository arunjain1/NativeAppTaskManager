import {useState} from 'react';
import {View,Text,FlatList,StyleSheet,Pressable} from 'react-native';

export default function GoalDisplay(props){
   
   return(
    <View style={styles.goalContainer}>
          <FlatList
            data = {props.goals}
            renderItem={(itemData)=>{
              return(
                <Pressable 
                  onPress={props.handleRemoveGoal.bind(this,itemData.item.id)}
                  android_ripple={{color : "#210644"}}
                  style={({pressed})=> pressed && styles.pressedItem}
                >
                <View  style = {styles.goalItem}>
                <Text style = {styles.goalText}>
                  {itemData.item.text}
                </Text>
                </View>
                </Pressable>
              )
            }}
            keyExtractor={(item, index)=>{
                return item.id;
            }}
          /> 
        </View>
   )

}

const styles = StyleSheet.create({
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
      },
      pressedItem : {
       opacity : 0.5,
      }
});