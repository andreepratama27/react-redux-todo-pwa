const List = ({ data }) => (
  <ul>
  {data.map((v,key) => (
    <li key={key}>
      {v.task}
    </li>
  ))}
  </ul>
)

export default List