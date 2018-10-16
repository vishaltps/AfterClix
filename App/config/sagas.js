import { takeEvery, select, call, put } from 'redux-saga/effects';
import { LOGIN, AUTHENTICATION_RESULT, AUTHENTICATION_ERROR } from '../actions/authentication';

const authenticateUser = (email, password) => fetch('http://104.251.216.241/sites/sagargadani/ss_studio_api/oauth/token', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: email,
    password: password,
    grant_type: "password"
  }),
});
function* fetchUser(action){
    try{
      console.log("Email", action.email)
      console.log("Password", action.password)
      const response = yield call(authenticateUser, action.email, action.password)
      const result = yield response.json();
      if (result.error) {
          yield put({ type: AUTHENTICATION_ERROR, error: result.error });
      } else {
          yield put({ type: AUTHENTICATION_RESULT, result });
      }
    }
    catch (e) {
      yield put({ type: AUTHENTICATION_ERROR, error: e.message });
    }
}
export default function* rootSaga() {
    yield takeEvery(LOGIN, fetchUser);
}