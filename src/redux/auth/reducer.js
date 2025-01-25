import actions from './actions';

const initState = {
  signUpModal: false,
  signUpLoading: false,
  signUpMessage: null,
  signUpError: null,
  loginToken: null,
  loginLoading: false,
  loginMessage: null,
  loginError: null,
  forgetPasswordLoading: false,
  forgetPasswordMessage: null,
  forgetPasswordError: null,
  changePasswordLoading: false,
  changePasswordMessage: null,
  changePasswordError: null,
  changePasswordModal: false,
  getUserDetailsLoading: false,
  getUserDetailsMessage: null,
  getUserDetailsError: null,
  userDetails: [],
  loading: false,
  tokenData: [],
  tokenError: null,
};


export default function authReducer(state = initState, action) {
  switch (action.type) {

    case actions.CHANGE_PASSWORD_PORTAL_SUCCESS_MODAL_CLOSE:
      return {
        ...state,
        changePasswordPortalSuccessModal: false,
      };

    case actions.GET_USER_DETAILS:
      return {
        ...state,
        getUserDetailsLoading: true,
        getUserDetailsMessage: null,
        getUserDetailsError: null,
      };
    case actions.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        getUserDetailsLoading: false,
        getUserDetailsMessage: action.payload.message,
        getUserDetailsError: null,
        userDetails: action.payload.data,
      };
    case actions.GET_USER_DETAILS_FAILED:
      return {
        ...state,
        getUserDetailsLoading: false,
        getUserDetailsMessage: null,
        getUserDetailsError: action.payload.error,
      };


    case actions.CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordLoading: true,
        changePasswordMessage: null,
        changePasswordError: null,
      };
    case actions.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordMessage: action.payload.message,
        changePasswordError: null,
        changePasswordModal: true,
      };
    case actions.CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordMessage: null,
        changePasswordError: action.payload.error,
      };
    case actions.GET_USER_DATA_BY_TOKEN:
      return {
        ...state,
        loading: true,
        loginError: null
      };
    case actions.GET_USER_DATA_BY_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        tokenData: action.tokenData
      };
    case actions.GET_USER_DATA_BY_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
        tokenError: action.tokenError
      };

      case actions.CLOSE_ALERT:
      return {
        ...state,
        loading: false,
        loginError: null,
        loginMessage:null,
      };


    case actions.FORGET_PASSWORD:
      return {
        ...state,
        forgetPasswordLoading: true,
        forgetPasswordMessage: null,
        forgetPasswordError: null,
      };
    case actions.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        forgetPasswordLoading: false,
        forgetPasswordMessage: action.payload.message,
        forgetPasswordError: null,
      };
    case actions.FORGET_PASSWORD_FAILED:
      return {
        ...state,
        forgetPasswordLoading: false,
        forgetPasswordMessage: null,
        forgetPasswordError: action.payload.error,
      };

    case actions.LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginMessage: null,
        loginError: null,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginToken: action.payload.token,
        loginMessage: 'Login success',
        loginError: null,
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginMessage: null,
        loginError: action.payload.error,
      };

    case actions.SIGN_UP:
      return {
        ...state,
        signUpLoading: true,
        signUpMessage: null,
        signUpError: null,
      };
    case actions.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpMessage: action.payload.message,
        signUpError: null,
        signUpModal: true,
      };
    case actions.SIGN_UP_FAILED:
      return {
        ...state,
        signUpLoading: false,
        signUpMessage: null,
        signUpError: action.payload.error,
      };


    case actions.CLOSE_SIGN_UP_MODAL:
      return {
        ...state,
        signUpModal: false,
      };



    case actions.AUTH_RESET:
      return {
        ...state,
        signUpLoading: false,
        signUpMessage: null,
        signUpError: null,
        loginLoading: false,
        loginMessage: null,
        loginError: null,
        forgetPasswordLoading: false,
        forgetPasswordMessage: null,
        forgetPasswordError: null,
        changePasswordModal: false,
      };

    default:
      return state;
  }

}
