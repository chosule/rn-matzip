import React, {useRef} from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';

const LoginScreen = () => {
  const passwordRef = useRef<TextInput | null>(null);
  const login = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handlerSubmit = () => {
    console.log('values', login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="아이디"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          returnKeyType="next"
          submitBehavior="newline"
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          inputMode="numeric"
          secureTextEntry //비밀번호는 안보여야하니까
          returnKeyType="join"
          submitBehavior="newline"
          onSubmitEditing={handlerSubmit}
          touched={login.touched.password}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton label="로그인" onPress={handlerSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
