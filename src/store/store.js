import { createStore } from 'redux'


const initState = [
    {
        text: 'Andre Pratama',
        done: false
    }
]

const initial = JSON.parse(localStorage.getItem('todo'))
console.log(initial)

const reducer = (state=initial, action) => {
    switch (action.type) {
        case 'ADD': {
            const newState = state
            newState.push({
                text: action.payload,
                done: false
            })
			localStorage.setItem('todo', JSON.stringify(newState))
            return newState
            break
        }

        case 'DEL': {
            const nowState = state
            nowState.splice(action.payload, 1)
			localStorage.setItem('todo', JSON.stringify(nowState))
            return nowState
            break
        }

        case 'DONE': {
            console.log(action.payload)
            break
        }

        default: {
            return state
        }
    }
}

const store = createStore(reducer)

export default store
