import React, { useState } from "react";
export default function FormEdit({ setIsEdit, item, onUpdate }) {
  const [newValue, setNewValue] = useState(item.title);
  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
    onUpdate(item.id, newValue);
  }
  function handleChange(e) {
    const value = e.target.value;
    setNewValue(value);
  }
  return (
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoInput"
        onChange={handleChange}
        value={newValue}
      />
      <button className="button" type="submit">
        Update
      </button>
      <button onClick={() => setIsEdit(false)} className="buttonDelete">
        Cancel
      </button>
    </form>
  );
}
