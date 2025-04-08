import { View, Text } from 'react-native'
import React from 'react'
import Splash from './src/Splash'
import CoverLetter from './src/CoverLetter'
import CompanyInfo from './src/CompanyInfo'
import Fitness from './src/Fitness'
import FitnessNew from './src/FitnessNew'

export default function App() {
  return (
    <View>
      {/* <Fitness/> */}
      <FitnessNew />
      {/* <CompanyInfo/> */}
      {/* <CoverLetter/> */}
      {/* <Splash/> */}
      {/* <Text>App</Text> */}
    </View>
  )
}