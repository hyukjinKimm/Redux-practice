const { createStore, compose, applyMiddleware } = require('redux')
const reducer = require('./reducers')

const { logIn, logOut} = require('./actions/user')
const { addPost } = require('./actions/post')
const initialState = {
    user: {
      isLoggedIn: true,
      data: null
    },
    posts: [],
}

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log('액션로깅', action)
  // 기능추가

  console.log('1', action)
  dispatch(action)

}

const thunkMiddelware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function'){ // 비동기
    console.log('2', action)
    return action(store.dispatch, store.getState)
  }
  console.log('3', action)
  dispatch(action)
  console.log('4', action)
}
const enhancer = compose(
  applyMiddleware(
    firstMiddleware,
    thunkMiddelware
  )
)
const store = createStore(reducer, initialState, enhancer);

console.log(store.getState());
/* store.dispatch(logIn({
  id: 1,
  name: 'hyukjinKimm',
  admin: true
}))
console.log('2nd ,', store.getState()) */
const test = addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요 리덕스씨!'
})


store.dispatch(logIn({'hi': 2}))
console.log(store.getState())
/*
store.dispatch(addPost({
    userId: 1,
    id: 2,
    content: '리덕스를 배워봅시다!'
  }))
console.log('4nd ,', store.getState())
store.dispatch(logOut({

}))
console.log('5nd ,', store.getState()) */