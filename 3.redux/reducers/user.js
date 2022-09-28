const initialState = {
    isLoggedIn: false,
    data: null    
}

const userReducer = (preState=initialState, action) => {
    switch(action.type){
      case 'LOG_IN_REQUEST':
          return {
              ...preState,
              isLoggedIn: true,
          }
      case 'LOG_OUT':
          return {
              ...preState,
              data: null,
          }
      case 'LOG_IN_SUCCESS':
        console.log('hi')
        return {
            ...preState,
            data: action.data,    
            isLoggedIn: false     
        }
      default:
          return preState
    }
}

module.exports = userReducer