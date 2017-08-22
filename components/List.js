const List = ({ data, onClick }) => (
  <ul>
  {data.map((v,key) => (
    <li key={key} onClick={ onClick }>
      {v.task} - {v.id}
    </li>
  ))}
  </ul>
)

export default List