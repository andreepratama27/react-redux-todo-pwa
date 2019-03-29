import React, {Component} from 'react';
import {
  Box,
  Container,
  Divider,
  SegmentedControl,
  Checkbox,
  Label,
} from 'gestalt';

class App extends Component {
  render() {
    return (
      <Box>
        <Container>
          <Divider />

          <ul classame="list-horizontal">
            <li>
              <Box>Delete</Box>
            </li>
          </ul>
        </Container>
      </Box>
    );
  }
}

export default App;
