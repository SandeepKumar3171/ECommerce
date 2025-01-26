import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { postRegister, postLogin, postForgetPwd, getList, editData, addData } from '../../helpers/fackBackend_Helper';




function* dealerSignUpResponse({ payload: { data } }) {
  try {
    const response = yield call(postRegister, '/verifyDealer', data);
    if (response.response.Status) {
      yield put(actions.signUpSuccess(response.response.Message));
    } else {
      yield put(actions.signUpFailed(response.response.Message));
    }
  } catch (error) {
    yield put(actions.signUpFailed(error));
  }
}
export function* watchDealerSignUpResponse() {
  yield takeEvery(actions.SIGN_UP, dealerSignUpResponse)
}
function* loginResponse({ payload: { data } }) {
  debugger
  try {
    const response = yield call(postLogin, '/user_login', data);
    if (response.response.Status) {
      yield put(actions.loginSuccess(response.response.Token));
    } else {
      yield put(actions.loginFailed(response.response.Data.Message));
    }
  } catch (error) {
    yield put(actions.loginFailed(error));
  }
}
export function* watchLoginResponse() {
  yield takeEvery(actions.LOGIN, loginResponse)
}

function* forgetPasswordResponse({ payload: { data } }) {
  try {
    const response = yield call(postForgetPwd, '/forgetPassword', data);
    if (response.response.Status) {
      yield put(actions.forgetPasswordSuccess(response.response.Message));
    } else {
      yield put(actions.forgetPasswordFailed(response.response.Message));
    }
  } catch (error) {
    yield put(actions.forgetPasswordFailed(error));
  }
}
export function* watchForgetPasswordResponse() {
  yield takeEvery(actions.FORGET_PASSWORD, forgetPasswordResponse)
}

function* changePasswordResponse({ payload: { data } }) {
  try {
    const response = yield call(postRegister, '/resetPassword', data);
    if (response.response.Status) {
      yield put(actions.changePasswordSuccess(response.response.Message));
    } else {
      yield put(actions.changePasswordFailed(response.response.Message));
    }
  } catch (error) {
    yield put(actions.changePasswordFailed(error));
  }
}
export function* watchChangePasswordResponse() {
  yield takeEvery(actions.CHANGE_PASSWORD, changePasswordResponse)
}

function* getUserDetailsResponse() {
  try {
    const response = yield call(getList, '/getUserByToken');
    if (response.response.Status) {
      yield put(actions.getUserDetailsSuccess(response.response.Message, response.response.Data));
    } else {
      yield put(actions.getUserDetailsFailed(response.response.Message));
    }
  } catch (error) {
    yield put(actions.getUserDetailsFailed(error));
  }
}
export function* watchGetUserDetailsResponse() {
  yield takeEvery(actions.GET_USER_DETAILS, getUserDetailsResponse)
}

function* userDataByTokenResponse() {
  try {
    const response = yield call(getList, '/getUserByToken');
    if (response.response.Status) {
      yield put(actions.getUserDataByTokenSuccess(
        response.response.Data
      ));
    }
    else {
      yield put(actions.getUserDataByTokenError(
        response.response.Message
      ));
    }
  } catch (error) {
    yield put(actions.getUserDataByTokenError(error));
  }
}

export function* watchUserDataByTokenResponse() {
  yield takeEvery(actions.GET_USER_DATA_BY_TOKEN, userDataByTokenResponse)
}

export default function* rootSaga() {
  yield all([
    fork(watchDealerSignUpResponse),
    fork(watchLoginResponse),
    fork(watchForgetPasswordResponse),
    fork(watchChangePasswordResponse),
    fork(watchGetUserDetailsResponse),
    fork(watchUserDataByTokenResponse),
  ]);
}

// export default function* rootSaga() {
//   yield all([takeEvery(actions.GET_USER, getUserListResponse)]);
//   yield all([takeEvery(actions.ADD_USER, addUserDataResponse)]);
//   yield all([takeEvery(actions.EDIT_USER, editUserDataResponse)]);
//   yield all([takeEvery(actions.DELETE_USER, deleteUserDataResponse)]);
//   yield all([takeEvery(actions.USER_PASSWORD_RESET, resetUserPasswordResponse)]);
// }
