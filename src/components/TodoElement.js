import React from "react";
export default function TodoElement({ item, setIsEdit, onDelete }) {
  return (
    <div className="todoInfo">
      <span className="todoTitle">{item.title}</span>
      <button onClick={() => setIsEdit(true)} className="button">
        Edit
      </button>
      <button onClick={() => onDelete(item.id)} className="buttonDelete">
        Delete
      </button>
    </div>
  );
}
