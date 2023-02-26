import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import StyledButton from '../StyleButton'
import styles from "./style"
function CarItem(props) {
  const {name, tagline,taglineCTA, image} = props
  return (
    <View style={styles.carContainer}>
    <ImageBackground 
      source={image}
      style={styles.backgroundImage}/>
    <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>
        {tagline}
        <Text style={styles.taglineCTA}>{taglineCTA}</Text>
      </Text>
    </View>
    <View style={styles.buttonsContainer}>

     <StyledButton
      type="primary"
      content="Custom order"
      onPress = {()=>{
        console.warn("Custom order was pressed")
      }}
      />
       <StyledButton
      type="secondary"
      content="existing enventory"
      onPress = {()=>{
        console.warn("Existing enventory was pressed")
      }}
      />
      </View>
  </View>
  )
}

export default CarItem