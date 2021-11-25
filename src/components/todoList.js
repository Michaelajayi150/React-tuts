import React, { useState } from "react";
import Todo from "./todo";

function TodoList({
  input,
  handleSubmit,
  inputElement,
  handleDelete,
  updateTodo
}) {
  const [edit, setEdit] = useState({ id: null, value: "" });

	const submitUpdate = (e) => {
		e.preventDefault();
		handleUpdate(inputElement.current.value);
	}
	
	const handleUpdate = value => {
		updateTodo(edit.id, value);
		setEdit({ id: null, value: "" })
	}

  if (edit.id) {
    return (
        <>
        {edit ? (
          <div className="todo-container">
            <Todo handleSubmit={submitUpdate} inputElement={inputElement} tab="Update" />
          </div>
        ) : (
          <div className="todo-container">
      			<Todo handleSubmit={handleSubmit} inputElement={inputElement} tab="Add todo" />
					</div>
        )}
        </>
    )}

  return (
    <div className="todo-container">
      <Todo handleSubmit={handleSubmit} inputElement={inputElement} tab="Add todo" />
			<div className="todolist-container">	
				{input.map((item, index) => {
					return (
							<div className="todo-list" key={index}>
							<span className="todo-item">{item.value}</span>
							<div className="todo-item-btn">
								<button
									className="btn btn-success"
									onClick={() => setEdit({ id: item.id, value: item.value })}
								>
									Edit
								</button>
								<button
									className="btn btn-danger"
									onClick={() => handleDelete(item)}
									>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
    </div>
  );
}

export default TodoList;
