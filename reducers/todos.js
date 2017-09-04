let nextId = 0

const initState = JSON.parse(localStorage.getItem('todo')) || []

const reducers = (state=initState, action) => {

  switch(action.type) {

    case 'ADD': {

	  let addData = [
		...state,
		{
			id: nextId++,
			task: action.task,
			done: false
		}
	  ]

	  localStorage.setItem('todo', JSON.stringify(addData))

	  return addData

    }

    case 'DONE': {
      return state.map(v =>
        (v.id === action.data.id)
          ? {...v, done: !v.done}
          : v
      )
    }

    case 'DEL': {

	  const delData = [
		...state.slice(0, action.id),
		...state.slice(action.id + 1)
	  ]

	  localStorage.setItem('todo', JSON.stringify(delData))

	  return delData
    }

    default: {
      return state
    }
  }
}

export default reducers