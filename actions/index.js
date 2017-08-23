export const addTodo = data => ({
  type: 'ADD',
  task: data.task
})

export const setDone = data => ({
  type: 'DONE',
  id: data.id
})

export const delTask = data => ({
    type: 'DEL',
    id: data.id
})