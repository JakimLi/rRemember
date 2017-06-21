import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View
} from 'react-native';

export default ({status, cardType, handlers}) => {

  const onStart = () => {
    const {shuffle} = handlers;
    shuffle();
  }

  const onFinished = () => {
    const {check} = handlers;
    check();
  };

  const toggleCardType = () => {
    const {toggleCardType} = handlers;
    toggleCardType();
  }

  if (status === 'ready' || status === 'checking') {
    return (
      <View>
          <Button title="Start" onPress={onStart}/>
          <Button title={cardType === 'normal' ? 'pretty': 'ugly'}
                  onPress={toggleCardType}/>
      </View>
    );
  } else {
    return (
      <View>
          <Button title="Check" onPress={onFinished}/>
          <Button title={cardType === 'normal' ? 'pretty': 'ugly'}
                  onPress={toggleCardType}/>
      </View>
    );
  }
}
