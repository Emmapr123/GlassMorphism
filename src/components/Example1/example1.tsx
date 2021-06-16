import React from 'react'
import {
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import { BlurView } from 'expo-blur';

const ExampleOne = () => {
  const { width, height } = Dimensions.get('window')

  return(
    <BlurView intensity={100} style={[StyleSheet.absoluteFill,{ position: 'absolute', top: height / 2, left: width / 2,height: 200, width: 200}]} >
      <Text style={{alignSelf: 'center'}}>I am Using BlurView</Text>
    </BlurView>
  )
}

export { ExampleOne }