import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInputProps,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../constants';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}
const InputField = ({
  disabled = false,
  error,
  touched,
  ...props
}: InputFieldProps) => {
  const inputRef = useRef<TextInput | null>(null);
  const handlePressInput = () => {
    inputRef.current?.focus();
  };
  return (
    <Pressable onPress={handlePressInput}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          touched && error && styles.error,
        ]}>
        <TextInput
          editable={!disabled}
          placeholderTextColor={colors.GRAY_500}
          style={[styles.input, disabled && styles.disabled]}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
        {touched && !!error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: Dimensions.get('screen').height > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  error: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  errorText: {
    color: colors.RED_300,
    fontSize: 12,
    paddingTop: 5,
  },
});

export default InputField;
