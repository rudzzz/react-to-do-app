import React from "react";

const ToDos = ({todo, removeTodo, completeTodo}) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
              <p>{todo.description}</p>
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button className="complete-task" onClick={() => completeTodo(todo.id)}>Mark as completed</button>
              <button className="remove-task" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
    )
}

export default ToDos;