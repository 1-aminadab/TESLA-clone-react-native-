import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from "./style"
function StyledButton(props) {
  const {type, content, onPress} =props

  const backgroundColor = type === "primary" ? "#171a20cc":"#ffffffa6"
  const textColor = type === "primary" ? "#ffffff":"#171a20"
  return (
   <View style={styles.container}>
        <Pressable
          onPress={onPress}
          style={[styles.button, {backgroundColor:backgroundColor}]}
        >
          <Text style={[styles.text, {color:textColor}]}>{content}</Text>
        </Pressable>
   </View>
  )
}

export default StyledButton