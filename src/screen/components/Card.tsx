import React from "react";
import { Dimensions, View } from "react-native";
import { Card } from 'react-native-paper';

const CardComponent = ({cardImage} : {cardImage: string}) => {
  const HEIGHT = Dimensions.get('screen').height * 0.75;

  return (
    <Card>
      <Card.Cover source={{ uri: `${cardImage}`}} style={{height: HEIGHT, padding: 15}}/>
    </Card>
  )
}

export default CardComponent;