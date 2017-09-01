export const addTodo = data => ({
  type: 'ADD',
  task: data.task
})

export const filterTodo = filter => ({
  type: 'FILTER_TODO',
  filter
})

export const setDone = data => ({
  type: 'DONE',
  data
})

export const delTask = data => ({
    type: 'DEL',
    id: data.id
})