import { View, Text, ImageBackground } from 'react-native'
import StyledButton from "../StyledButton"
import React from 'react'
import styles from './styles'

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>

        <Text style={styles.subtitle}> Starting at $69,429</Text>
      </View>

      <StyledButton 
        type='primary' 
        content={"Custom Order"} 
        onPress={() => {
          console.warn("Custom Order was pressed")
        }}
        />

      <StyledButton 
        type='secondary' 
        content={"Existing Inventory"} 
        onPress={() => {
          console.warn("Exsisting Inventory was pressed")
        }}
        />
     </View>
  )
}

export default CarItem