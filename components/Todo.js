import BoxInput from "Component/BoxInput";
import { Divider, SegmentedControl, Box, Checkbox, Label } from "gestalt";
import Filtering from "Component/Filtering";
import List from "Component/List";

const Todo = props => {
  const { todos, addTodo, filterTodo, setDone, delTask } = props;

  const handleClick = e => {
    if (e.keyCode === 13) {
      const data = { task: e.target.value };

      addTodo(data);

      e.target.value = "";
    }
  };

  const taskDone = id => {
    setDone({ id });
  };

  const deleteData = id => {
    delTask({ id });
  };

  return (
    <div>
      <BoxInput handleClick={handleClick} />

      <Box>
        <SegmentedControl items={["All", "Done"]} selectedItemIndex={0} />
      </Box>

      {/* <Filtering filter={filterTodo} /> */}

      <Divider />

      {!todos.length ? (
        <h4 style={{ color: "#999", textAlign: "center" }}>Task not found</h4>
      ) : (
        <List data={todos} deleteData={deleteData} taskDone={taskDone} />
      )}
    </div>
  );
};

export default Todo;
