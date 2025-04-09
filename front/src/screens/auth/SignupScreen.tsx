import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';

const SignupScreen = () => {
  const signUp = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);

  const handleSubmit = () => {
    console.log('회원가입 submit', signUp.values);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="아이디"
          error={signUp.errors.email}
          inputMode="email"
          touched={signUp.touched.email}
          returnKeyType="next"
          submitBehavior="newline"
          multiline={false}
          onSubmitEditing={() => passwordRef.current?.focus()} //next를 누를고 나서 동작 적용
          {...signUp.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={signUp.errors.password}
          inputMode="numeric"
          secureTextEntry
          touched={signUp.touched.password}
          returnKeyType="next"
          submitBehavior="newline"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signUp.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signUp.errors.passwordConfirm}
          inputMode="numeric"
          secureTextEntry
          touched={signUp.touched.passwordConfirm}
          returnKeyType="next"
          onSubmitEditing={handleSubmit}
          {...signUp.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
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
