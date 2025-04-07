import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import {RootStackParamList} from '../navigations/AuthStackNavigator';
import {authNavigations} from '../constants';

type AuthHomeScreenProps = StackScreenProps<RootStackParamList>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthHomeScreen;
