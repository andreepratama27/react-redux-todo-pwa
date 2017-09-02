const BoxInput = ({ handleClick }) => (
  <div>
      <input
          type='text'
          spellCheck="false"
          className='form-control input-box'
          maxLength='20'
          onKeyUp={ handleClick } />
  </div>
)

export default BoxInput