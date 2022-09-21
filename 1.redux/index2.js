const { createStore } = require('redux')

const initialState = {
    user: null,
    posts: [],
}


const reducer = (preState, action) => {
  switch(action.type){
    case 'LOG_IN':
        return {
            ...preState,
            user: action.data,
        }
    case 'LOG_OUT':
        return {
            ...preState,
            user: null,
        }
    case 'ADD_POST':
        return {
            ...preState,
            posts: [...preState.posts, action.data],
        }
    default:
        return preState
  }
}
const store = createStore(reducer, initialState);

const logIn = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

const logOut = (data) => {
    return {
      type: 'LOG_OUT',
    }
}

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  }
}
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
console.log('4nd ,', store.getState())