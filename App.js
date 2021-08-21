/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  View,
  Text
} from 'react-native';
import Header from './assets/components/Header/Header';
import CustomerCard from './assets/components/CustomerCard/CustomerCard';

const { width, height } = Dimensions.get('window');
const App = () => {
  const [id, setId] = React.useState(['1', '2', '3']);
  return (
    <SafeAreaView style={{backgroundColor: '#22232C', width: width, height: height, alignItems: "center"}}>
      <Header />
      <CustomerCard id='1' name='john' style={{ marginTop: 30 }} />
      <CustomerCard id='2' name='bob' style={{ marginTop: 30 }} />
      <CustomerCard id='3' name='well' style={{ marginTop: 30 }} />
    </SafeAreaView>
  );
};

export default App;
