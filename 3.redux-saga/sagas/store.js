const { createStore, compose, applyMiddleware } = require('redux')
const  createSagaMiddleware  = require('redux-saga')
console.log(createSagaMiddleware)
const SagaMiddleware = createSagaMiddleware()
const reducer = require('./reducers')


const initialState = {
    user: {
      isLoggedIn: false,
      data: null
    },
    posts: [],
}

const middlewares = [SagaMiddleware]
const enhancer = compose(
  applyMiddleware(...middlewares)
)
const store = createStore(reducer, enhancer);

//module.exports = store