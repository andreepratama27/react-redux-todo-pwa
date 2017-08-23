const List = ({ data, onClick }) => (
  <ul className="list-horizontal">
  {data.map((v,key) => (
    <li key={key}>
      <div className='text'>
        {v.task} - {v.id}
      </div>
      <div className='option'>
        {/*<div className='done' onClick={ (e) => setDone(key) }>
          <i className='fa fa-check' />
        </div> */}
        <div className='delete' onClick={ (e) => onClick(key) }>
          <i className='fa fa-trash' />
        </div>
      </div>
    </li>
  ))}
  </ul>
)

export default List