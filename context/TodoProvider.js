import React from 'react';

const TodoContext = React.createContext();
const TodoConsumer = TodoContext.Consumer;

class TodoProvider extends React.Component {
  state = {
    todo: [],
  };

  addTodo = task => {
    this.setState({
      todo: [...this.state.todo, task],
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{data: this.state.todo, addTodo: this.addTodo}}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
