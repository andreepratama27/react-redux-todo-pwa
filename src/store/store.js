import { createStore } from 'redux'


const initState = [
    {
        text: 'Andre Pratama',
        done: false
    }
]

const reducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD': {
            const newState = state
            newState.push({
                text: action.payload,
                done: false
            })
            return newState
            break
        }

        case 'DEL': {
            const nowState = state
            nowState.splice(action.payload, 1)
            return nowState
            break
        }

        default: {
            return state
        }
    }
}

const store = createStore(reducer)

export default store
