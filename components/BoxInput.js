import { Box, Label, TextField, Button } from "gestalt";
const BoxInput = ({ handleClick }) => (
  <Box>
    <TextField
      placeholder="Insert task here"
      id="text"
      type="text"
      spellCheck="false"
      className="form-control input-box"
      maxLength="20"
      onKeyUp={handleClick}
      onChange={() => null}
    />
    <Box paddingY={4}>
      <Button color="red" text="Submit" />
    </Box>
  </Box>
);

export default BoxInput;
