const List = ({ data, deleteData, taskDone }) => (
  <ul className="list-horizontal">
  {data.map((v,key) => (
    <li key={key}>
      <div
        className='text'
        className={ v.done ? 'task-done' : ''}
        onClick={ (e) => taskDone(v.id) }>
          {v.task}
      </div>
      <div className='option'>
        <div className='delete' onClick={ (e) => deleteData(key) }>
          <i className='fa fa-trash' />
        </div>
      </div>
    </li>
  ))}
  </ul>
)

export default List