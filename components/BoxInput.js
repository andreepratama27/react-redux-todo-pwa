const BoxInput = ({ handleClick }) => (
  <div>
    <input type='text' spellCheck="false" className='form-control input-box' onKeyUp={ handleClick } />
  </div>
)

export default BoxInput