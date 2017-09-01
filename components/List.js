const List = ({ data, deleteData, taskDone }) => (
  <ul className="list-horizontal">
  {data.map((v,key) => (
    <li key={key}>
      <div className='text' onClick={ (e) => taskDone(v.id) }>
        {v.task}
      </div>
      <div className='option'>
        <div className='delete' onClick={ (e) => deleteData(key) }>
          &times;
        </div>
      </div>
    </li>
  ))}
  </ul>
)

export default List