/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigations/AuthStackNavigator';

function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */

  const [text, setText] = useState('');

  const handleButton = (text: string) => {
    console.log('text', text);
    setText(text);
  };

  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    width: '100%',
    height: 50,
    borderWidth: 1,
  },
});

export default App;
