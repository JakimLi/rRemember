import React, { Component } from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';

export default ({status, handlers}) => {

  const onStart = () => {
    const {shuffle} = handlers;
    shuffle();
  }

  const onFinished = () => {
    const {check} = handlers;
    check();
  };

  if (status === 'ready' || status === 'checking') {
    return <Button title="Start" onPress={onStart}/>;
  } else {
    return <Button title="Check" onPress={onFinished}/>;
  }
}
