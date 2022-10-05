import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

const LOG_IN = 'LOG_IN'
const LOG_IN_SUCCESS = 'LOG_SUCCESS'
const LOG_IN_FAILURE = 'LOG_FAILURE'

function loginAPI(){
// 서버에 요청을 보내는 부분

}
function* login(){
  try{
    yield call(loginAPI)
    yield put({ // PUT은 disptach 와 동일 
      type: LOG_IN_SUCCESS
    })
  } catch(e) { // loginAPI 실패 
    console.error(e)
    yield put({
        type: LOG_IN_FAILURE
      })
  }
}
function* watchLogin(){
  takeLatest(LOG_IN, login)
}
// takeLates 가 LOG_IN 액션이 dispatch  될때까지 기다리고, dispatch  된다면 login 제네레이터를 호출한다.
export default function* userSaga() {
  yield all([
    fork(watchLogin)
  ])
}