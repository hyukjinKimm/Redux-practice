const logIn = (data) => { // async function creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try{
      setTimeout(() => {
        dispatch(logInSuccess({
          id: 1,
          nickname: 'hyukjin',
        }))
      }, 2000);
    } catch(e) {
      dispatch(logInFailure(e))
    }

  }
}

const logInRequest = (data) => {
  return{
    type: 'LOG_IN_REQUEST',
    data
  }
}

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data
  }
}
const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error
  }
}

  
  const logOut = (data) => {
      return {
        type: 'LOG_OUT',
      }
  }
  
  
module.exports = {
    logIn,
    logOut,
  }