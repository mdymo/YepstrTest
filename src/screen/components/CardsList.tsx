import React, { useEffect, useState } from 'react'
import { CardType } from '../../interfaces/CardType'
import CardComponent from './Card'
import { FlatList, View } from 'react-native'
import GameContainer from './GameContainer'

const CardsList = ({cards} : {cards:CardType[] | null}) => {
  const [cardValue, setCardValue] = useState<string>('');
  const [newCard, setNewCard] = useState<CardType[] | null>(null);
  const [prevCardValue, setPrevCardValue] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    cards?.map((card: CardType) => {
      setNewCard([card])
      setCardValue(card.value);
    })
  }, [cards]);


  const rendetItem = ({item} : {item: CardType}) => {

    return (
      <>
      <CardComponent
        cardImage={item.image}
      />
      <GameContainer
        result={result}
        onPressHigher={() => {}}
        onPressLower={() => {}}
      />
      </>
    )
  }

  return (
    <View style={{ flex: 1, height: 'auto'}}>
      {newCard ? (
      <FlatList
        data={newCard}
        renderItem={rendetItem}
        keyExtractor={item => item.code}
      /> ) : null}
    </View>
  )
}

export default CardsList;