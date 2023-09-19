import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getCard, getDeck } from '../services/cards.service';
import { RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import CardComponent from './components/Card';
import CardsList from './components/CardsList';
import GameContainer from './components/GameContainer';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { deckId, cards, remainingCards } = useAppSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getDeck());
  }, [])

  return (
    <View style={styles.view}>
      <CardsList
        cards={cards}
      />
      <View style={styles.bottomContainer}>
        <View style={{ alignItems: 'center'}}>
          <Text style={{margin: 15, fontSize: 16}}>
            Remaining: {remainingCards}
          </Text>
          <Button
            title='click me'
            onPress={() => dispatch(getCard(deckId))}
            disabled={deckId ? false : true}
          />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  bottomContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center'
  }
})

export default HomeScreen;