import { Component } from "react";
import Todo from "Container/Todo";
import { Box, Container } from "gestalt";
import style from "Style/style.scss";
import "gestalt/dist/gestalt.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box>
        <Container>
          <div className="todo-wrapper">
            <Todo {...this.props} />
          </div>
        </Container>
      </Box>
    );
  }
}

export default App;
