import AuthStackNavigator from '../stack/AuthStackNavigator';
import React from 'react';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

export default function RootNavigator() {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}
