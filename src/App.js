import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Find Good waltz in Am", completed: false }
  ]);
  const addTodo = (newTodo) => {
    setTodos(prevState => [...prevState, newTodo]);
  }
  const toggleCompleted = (id) => {
    // const newTodos = [];
    // for (let todo of todos) {
    //   if (todo.id === id) {
    //     newTodos.push({ ...todo, completed: !todo.completed })
    //   } else {
    //     newTodos.push(todo);
    //   }
    // }
    // setTodos(newTodos);

    setTodos(prevState => {
      return prevState.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo;
        }
      })

    });
  }
  const removeTodo = (id) => {
    setTodos(prevState => prevState.filter(todo => id !== todo.id));
  }
  return (
    <div class="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
