import {useState} from "react";
import { Pressable,Text} from "react-native";

export default function PressableButton(props){
    return(
        <Pressable
               android_ripple={props.customRipple?props.customRipple:""}
               onPress = {props.pressAction}
               style = {props.pressStyle}
             >
              <Text style = {props.pressText}>
                {props.title}
              </Text>
         </Pressable>
         
    )
}
