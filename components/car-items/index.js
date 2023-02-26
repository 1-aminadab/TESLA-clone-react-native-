import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyleButton';
import styles from "./style"
function CarItem() {
  return (
    <View style={styles.carContainer}>
    <ImageBackground 
      source={require('../../assets/images/ModelX.jpeg')}
      style={styles.backgroundImage}/>
    <View style={styles.titles}>
      <Text style={styles.title}>Model 5</Text>
      <Text style={styles.subtitle}>Starting at $49,399</Text>
    </View>
     <StyledButton/>
  </View>
  )
}

export default CarItem