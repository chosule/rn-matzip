interface UserInfomation {
  email: string;
  password: string;
}
function validateUser(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요.';
  }

  return errors;
}
const validateLogin = (values: UserInfomation) => {
  return validateUser(values);
};

const validateSignup = (values: UserInfomation & {passwordConfirm: string}) => {
  const errors = validateUser(values);
  const signupErrors = {
    ...errors,
    passwordConfirm: '',
  };
  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }
  return signupErrors;
};
export {validateLogin, validateSignup};
