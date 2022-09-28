const { createStore, compose, applyMiddleware } = require('redux')
const reducer = require('./reducers')

const { logIn, logOut} = require('./actions/user')
const { addPost } = require('./actions/post')
const initialState = {
    user: {
      isLoggedIn: false,
      data: null
    },
    posts: [],
}

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('액션로깅', action)
  // 기능추가
  dispatch(action)
  // 기능추가
  console.log('액션 끝', action)
}

const thunkMiddelware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function'){ // 비동기
    return action(store.dispatch, store.getState)
  }
  return dispatch(action)
}
const enhancer = compose(
  applyMiddleware(
    firstMiddleware,
    thunkMiddelware,
  )
)
const store = createStore(reducer, initialState, enhancer);

module.exports = store