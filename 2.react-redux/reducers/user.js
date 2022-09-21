const initialState = {
    isLoggedIn: true,
    data: null    
}

const userReducer = (preState=initialState, action) => {
    switch(action.type){
      case 'LOG_IN':
          return {
              ...preState,
              data: action.data,
          }
      case 'LOG_OUT':
          return {
              ...preState,
              data: null,
          }
      default:
          return preState
    }
}

module.exports = userReducer