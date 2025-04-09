import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import {RootStackParamList} from '../../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<RootStackParamList>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/MATZIP.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인 하기"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          variant="outlined"
          label="회원가입 하기"
          onPress={() => navigation.navigate(authNavigations.SIGN_UP)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
});

export default AuthHomeScreen;
