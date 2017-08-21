const initialState = [
  { task: 'andre pratama', done: false },
  { task: 'lionel messi', done: false }
]

const reducers = (state=initialState, action) => {

  switch(action.type) {

    case 'ADD': {
      return [
        ...state,
        {
          task: action.task,
          done: false
        }
      ]
    }

    default: {
      return state
    }
  }
}

export default reducers