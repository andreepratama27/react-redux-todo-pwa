import store from 'storeComponent/store'

const handleClick = (evt) => {
    evt.preventDefault()
    if (evt.keyCode === 13) {
        store.dispatch({type: 'ADD', payload: evt.target.value})
        evt.target.value = ''
    }
}

const Input = () =>
    <div className='inputText'>
        <input type='text' className='form-control' onKeyUp={handleClick} />
    </div>

export default Input
