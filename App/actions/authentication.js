export const LOGIN = "LOGIN";
export const AUTHENTICATION_RESULT = "AUTHENTICATION_RESULT";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const CHANGE_EMAIL_VALUE = "CHANGE_EMAIL_VALUE";
export const CHANGE_PASSWORD_VALUE = "CHANGE_PASSWORD_VALUE";

export const login = (email, password) => ({
  type: LOGIN,
  email: email,
  password: password
})

export const handleEmailChange = (value) => ({
  type: CHANGE_EMAIL_VALUE,
  email: value
})

export const handlePasswordChange = (value) => ({
  type: CHANGE_PASSWORD_VALUE,
  password: value
})