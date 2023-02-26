import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from "./style"
function StyledButton() {
  return (
   <View>
        <Pressable
          onPress={()=>{
            console.warn("hey there");
          }}
          style={styles.button}
        >

        </Pressable>
   </View>
  )
}

export default StyledButton