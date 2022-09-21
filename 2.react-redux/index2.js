const { createStore } = require('redux')
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



const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('changed')
})

console.log(store.getState());
store.dispatch(logIn({
  id: 1,
  name: 'hyukjinKimm',
  admin: true
}))
console.log('2nd ,', store.getState())
store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요 리덕스씨!'
}))
console.log('3nd ,', store.getState())
store.dispatch(addPost({
    userId: 1,
    id: 2,
    content: '리덕스를 배워봅시다!'
  }))
console.log('4nd ,', store.getState())
store.dispatch(logOut({

}))
console.log('5nd ,', store.getState())