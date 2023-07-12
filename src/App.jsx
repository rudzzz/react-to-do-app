import { useState } from "react";
import './App.css';
import ToDos from "../components/ToDos";
import FormToDos from "../components/FormToDos";
import Search from "../components/Search";
import OrderBy from "../components/OrderBy";

function App() {
  const [todos, setTodos] = useState([
        
  ]);

  const addTodos = (description, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        description,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const[search, setSearch] = useState("");

  const[filters, setFilters] = useState("All");

  const[orderBy, setOrderBy] = useState("ASC");

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);

    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Search search={search} setSearch={setSearch}/>
      <OrderBy filters={filters} setFilters={setFilters} setOrderBy={setOrderBy}/>
      <FormToDos addTodos={addTodos}/>
      <div className="todo-list">
        {todos
          .filter(
            (todo) => 
            filters === "All" 
            ? true 
            : filters === "Completed" 
            ? todo.isCompleted 
            : !todo.isCompleted)
          .filter((todo) => todo.description.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => orderBy == "ASC" ? a.description.localeCompare(b.text) : b.description.localeCompare(a.text))
          .map((todo) => (
            <ToDos key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>
    </div>
  )
}

export default App
