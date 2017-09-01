const Filtering = ({ filter }) => {
  return (
    <div className='filtering'>
      <div className='box' onClick={ () => filter('all') }>
        ALL
      </div>
      <div className='box'>
        /
      </div>
      <div className='box' onClick={ () => filter('done') }>
        DONE
      </div>
    </div>
  )
}

export default Filtering