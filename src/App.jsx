import React, { useState } from 'react'
const App = () => {
  const [todo,setTodo] = useState("");
  const [todolist,setTodoList] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodoList([...todolist, { id: Date.now(), text: todo, completed: false }]);
    setTodo("");
  };

  const handleComplete = (id) => {
    setTodoList(todolist.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  return (
    <div>
      <h1>To Do List</h1>
      <h3>Total Tasks: {todolist.length}</h3>
      <div className="input-container">
        <input type="text" placeholder='Add a new Task' value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className='add-button' onClick={handleAdd}>Add</button>
      </div>
      <ul className='todo-list'>
        {todolist.map((item) => (
          <li key={item.id} onClick={() => handleComplete(item.id)}
          style={{ cursor: "pointer", textDecoration: item.completed ? "line-through" : "none", color: item.completed ? "gray" : "black" }}
          >{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App