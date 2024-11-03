import { takeLatest, put } from "redux-saga/effects";
import { loginSuccess, loginFailure } from "../../actions/authAction";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* loginSaga(action: any) {
  try {
    const { username, password } = action.payload;
    if (username === "admin" && password === "password") {
      const user = { username: "admin", name: "Admin User" };
      yield put(loginSuccess(user));
    } else {
      yield put(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    console.log(error);
    yield put(loginFailure("Login failed"));
  }
}

export default function* watchAuth() {
  yield takeLatest("LOGIN_REQUEST", loginSaga);
}
