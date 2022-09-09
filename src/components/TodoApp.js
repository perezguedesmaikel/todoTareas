import { useState } from "react";
import uuid from "react-uuid";
import Todo from "./Todo";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  }
  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function onUpdate(id, newValue) {
    const temp = [...todos];
    const item2 = temp.find((item) => item.id === id);
    item2.title = newValue;
    setTodos(temp);
  }
  function onDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input
          className="todoInput"
          onChange={handleChange}
          type="text"
          value={title}
        />
        <input
          type="submit"
          value="Create Todo"
          className="buttonCreate"
          onClick={handleSubmit}
        />
      </form>
      <div className={"todosContainer"}>
        {todos.map((item) => (
          <Todo
            item={item}
            key={item.id}
            setTodos={setTodos}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
