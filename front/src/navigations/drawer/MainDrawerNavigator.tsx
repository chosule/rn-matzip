import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../screens/MapHomeScreen';
import React from 'react';
import FeedHomeScreen from '../../screens/FeedHomeScreen';

const Drawer = createDrawerNavigator();
export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
    </Drawer.Navigator>
  );
}
