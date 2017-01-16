import store from 'storeComponent/store'

const deleteData = (i) =>
    store.dispatch({type: 'DEL', payload: i})

const Todolist = ({data}) =>
    <div>
        <div className='list-horizontal'>
            <ul className='list-inline'>
                <li>All</li>
                <li>/</li>
                <li>Done</li>
            </ul>
        </div>

        <div className='list-vertical'>
            <ul className='list-group'>
                {
                    data.filter((v) =>
                        v.done === false
                    ).map((v, i) =>
                        <li className='list-group-item'
                            key={i}>
                            {v.text}
                            <span className='pull-right icon-delete'>
                                <i
                                    className='fa fa-trash'
                                    onClick={(evt) => {
                                        deleteData(i)
                                    }}
                                />
                                <i className='fa fa-check' />
                            </span>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>

export default Todolist
