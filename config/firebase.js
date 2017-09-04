import * as firebase from 'firebase'
import todoModel from 'Model/todo'
let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyCJxGGFeRca8uKymDnbcNP1di3b3vaHXsw",
    authDomain: "todo-c5636.firebaseapp.com",
    databaseURL: "https://todo-c5636.firebaseio.com",
    projectId: "todo-c5636",
    storageBucket: "todo-c5636.appspot.com",
    messagingSenderId: "926249648022"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

export const getTodoDB = () => {
    return database.ref('/todos').once('value')
}

export const addTodoItem = (task) => {
}
