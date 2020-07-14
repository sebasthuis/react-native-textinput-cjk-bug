/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>Normal</Text>
      <TextInput value={text} onChangeText={(value) => setText(value)} />
      <Text>Styles</Text>
      <TextInput
        style={styles.textInputStyled}
        value={text}
        onChangeText={(value) => setText(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyled: {
    fontSize: 30,
    fontWeight: 'bold',
    // lineHeight: 40,
    color: 'blue',
  },
});

export default App;
