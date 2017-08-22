window.id = 0

const reducers = (state=[], action) => {

  const self = this

  switch(action.type) {

    case 'ADD': {
      return [
        ...state,
        {
          id: window.id++,
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