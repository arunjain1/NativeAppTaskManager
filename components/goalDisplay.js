import { useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import PressableButton from "./customCore/PressableButton";

export default function GoalDisplay(props) {
  return (
    <View style={styles.displayContainer}>
      <View style={styles.addButton}>
        <PressableButton
          title="Add New goal"
          pressAction={props.addNewGoal}
          pressStyle={styles.pressButton}
          pressText={styles.pressText}
          customRipple={{ color: "#ccaef5", borderless: false, radius: 51 }}
        />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={props.goals}
          renderItem={(itemData) => {
            return (
              <Pressable
                onPress={props.handleRemoveGoal.bind(this, itemData.item.id)}
                android_ripple={{ color: "#210644" }}
                style={({ pressed }) => pressed && styles.pressedItem}
              >
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              </Pressable>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer:{
    flex : 1,
  },
  addButton: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  goalContainer: {
    flex: 8,
  },
  goalItem: {
    borderRadius: 6,
    padding: 8,
    margin: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
  pressedItem: {
    opacity: 0.5,
  },
  pressButton: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderRadius: 10,
    backgroundColor: "#74559e",
    marginHorizontal: 2,
  },
  pressText: {
    color: "#bdb1cc",
  },
});
