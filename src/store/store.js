import { createStore } from 'redux'


const initState = [
    {
        text: 'Andre Pratama',
        done: false
    }
]

const reducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD': {
            return [
                ...state,
                {
                    text: action.payload,
                    done: false
                }
            ]
            break
        }

        case 'DEL': {
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
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
