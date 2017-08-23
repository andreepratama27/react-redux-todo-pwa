export const addTodo = data => ({
  type: 'ADD',
  task: data.task
})

export const delTask = data => {
  return {
    type: 'DEL',
    id: data.id
  }
}