const actions = {
  AUTH_RESET: 'AUTH_RESET',
  CLOSE_SIGN_UP_MODAL: 'CLOSE_SIGN_UP_MODAL',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'SIGN_UP_FAILED',
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  FORGET_PASSWORD: 'FORGET_PASSWORD',
  FORGET_PASSWORD_SUCCESS: 'FORGET_PASSWORD_SUCCESS',
  FORGET_PASSWORD_FAILED: 'FORGET_PASSWORD_FAILED',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED: 'CHANGE_PASSWORD_FAILED',
  GET_USER_DATA_BY_TOKEN: "GET_USER_DATA_BY_TOKEN",
  GET_USER_DATA_BY_TOKEN_SUCCESS: "GET_USER_DATA_BY_TOKEN_SUCCESS",
  GET_USER_DATA_BY_TOKEN_FAILED: "GET_USER_DATA_BY_TOKEN_FAILED",
  GET_USER_DETAILS: 'GET_USER_DETAILS',
  GET_USER_DETAILS_SUCCESS: 'GET_USER_DETAILS_SUCCESS',
  GET_USER_DETAILS_FAILED: 'GET_USER_DETAILS_FAILED',
  OPEN_CHANGE_PASSWORD_MODAL: 'OPEN_CHANGE_PASSWORD_MODAL',
  CLOSE_CHANGE_PASSWORD_MODAL: 'CLOSE_CHANGE_PASSWORD_MODAL',
 


  openChangePasswordModal: () => ({
    type: actions.OPEN_CHANGE_PASSWORD_MODAL,
  }),
  closeChangePasswordModal: () => ({
    type: actions.CLOSE_CHANGE_PASSWORD_MODAL,
  }),

  getUserDetails: () => ({
    type: actions.GET_USER_DETAILS,
  }),
  getUserDetailsSuccess: (message, data) => ({
    type: actions.GET_USER_DETAILS_SUCCESS,
    payload: { message, data },
  }),
  getUserDetailsFailed: (error) => ({
    type: actions.GET_USER_DETAILS_FAILED,
    payload: { error },
  }),

  getUserDataByToken: () => ({
    type: actions.GET_USER_DATA_BY_TOKEN,
  }),
  getUserDataByTokenSuccess: (tokenData) => ({
    type: actions.GET_USER_DATA_BY_TOKEN_SUCCESS,
    tokenData
  }),
  getUserDataByTokenError: (tokenError) => ({
    type: actions.GET_USER_DATA_BY_TOKEN_FAILED,
    tokenError
  }),

  changePassword: (data) => ({
    type: actions.CHANGE_PASSWORD,
    payload: { data },
  }),
  changePasswordSuccess: (message) => ({
    type: actions.CHANGE_PASSWORD_SUCCESS,
    payload: { message },
  }),
  changePasswordFailed: (error) => ({
    type: actions.CHANGE_PASSWORD_FAILED,
    payload: { error },
  }),

  forgetPassword: (data) => ({
    type: actions.FORGET_PASSWORD,
    payload: { data },
  }),
  forgetPasswordSuccess: (message) => ({
    type: actions.FORGET_PASSWORD_SUCCESS,
    payload: { message },
  }),
  forgetPasswordFailed: (error) => ({
    type: actions.FORGET_PASSWORD_FAILED,
    payload: { error },
  }),

  login: (data) => ({
    type: actions.LOGIN,
    payload: { data },
  }),
  loginSuccess: (token) => ({
    type: actions.LOGIN_SUCCESS,
    payload: { token },
  }),
  loginFailed: (error) => ({
    type: actions.LOGIN_FAILED,
    payload: { error },
  }),

  signUp: (data) => ({
    type: actions.SIGN_UP,
    payload: { data },
  }),
  signUpSuccess: (message) => ({
    type: actions.SIGN_UP_SUCCESS,
    payload: { message },
  }),
  signUpFailed: (error) => ({
    type: actions.SIGN_UP_FAILED,
    payload: { error },
  }),


  closeSignUpModal: () => ({
    type: actions.CLOSE_SIGN_UP_MODAL,
  }),
  authReset: () => ({
    type: actions.AUTH_RESET,
  }),
};

export default actions;
