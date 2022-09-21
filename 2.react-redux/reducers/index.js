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

module.exports =  reducer