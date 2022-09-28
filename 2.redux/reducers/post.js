const initialState = []

const postReducer = (preState = initialState, action) => {
    switch(action.type){
      case 'ADD_POST':
        console.log('hi')
        return [...preState, action.data]
          
      default:
          return preState
    }
}

module.exports = postReducer