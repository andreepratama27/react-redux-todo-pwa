const initialState = [
  {
    task: 'cuci piring',
    done: false
  },
  {
    task: 'wisuda',
    done: false
  }
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

    case 'DEL': {
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    }

    default: {
      return state
    }
  }
}

export default reducers