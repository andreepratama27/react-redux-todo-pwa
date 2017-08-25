let nextId = 0

const reducers = (state=[], action) => {

  switch(action.type) {

    case 'ADD': {
      return [
        ...state,
        {
          id: nextId++,
          task: action.task,
          done: false
        }
      ]
    }

    case 'DONE': {
      return state.map(v =>
        (v.id === action.id)
          ? {...v, done: !v.done}
          : v
      )
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