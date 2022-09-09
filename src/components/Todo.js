import { useState } from "react";
import TodoElement from "./TodoElement";
import FormEdit from "./FormEdit";

export default function Todo({ item, setTodos, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="todo">
      {isEdit ? (
        <FormEdit
          setIsEdit={setIsEdit}
          item={item}
          setTodos={setTodos}
          onUpdate={onUpdate}
        />
      ) : (
        <TodoElement item={item} setIsEdit={setIsEdit} onDelete={onDelete} />
      )}
    </div>
  );
}
