import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

interface Props {
  result: number;
  onPressHigher: () => void;
  onPressLower: () => void;
}


const GameContainer = (props: Props) => {
  const {result, onPressHigher, onPressLower} = props;

  return (
    <View style={styles.buttonsContainer}>
       <Button
        title="Higher"
        onPress={onPressHigher}
       />
       <Text>
        Count: {result}
       </Text>
       <Button
        title="Lower"
        onPress={onPressLower}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default GameContainer;