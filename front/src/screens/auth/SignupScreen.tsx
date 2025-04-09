import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';

const SignupScreen = () => {
  const signUp = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="아이디"
          error={signUp.errors.email}
          inputMode="email"
          touched={signUp.touched.email}
          {...signUp.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={signUp.errors.password}
          inputMode="numeric"
          secureTextEntry
          touched={signUp.touched.password}
          {...signUp.getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          error={signUp.errors.passwordConfirm}
          inputMode="numeric"
          secureTextEntry
          touched={signUp.touched.passwordConfirm}
          {...signUp.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default SignupScreen;
