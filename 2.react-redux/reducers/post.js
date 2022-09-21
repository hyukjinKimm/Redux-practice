const initialState = []

const postReducer = (preState = initialState, action) => {
    switch(action.type){
      case 'ADD_POST':
        return [...preState, action.data]
          
      default:
          return preState
    }
}

module.exports = postReducer