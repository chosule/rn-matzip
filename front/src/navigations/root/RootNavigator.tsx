import AuthStackNavigator from '../stack/AuthStackNavigator';
import React from 'react';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

export default function RootNavigator() {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}
