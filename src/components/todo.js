import React, { useState } from "react";

function Todo({
  input,
  handleSubmit,
  handleChange,
  inputElement,
  handleDelete,
}) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  if (edit.id) {
    return (
      <form>
        {edit ? (
          <>
            <input
              type="text"
              className="input"
              ref={inputElement}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="input"
              ref={inputElement}
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>
              Add Todo
            </button>
          </>
        )}
      </form>
    );
  }

  return (
    <div className="todo-container">
      <h1>What's Your Plan For Today</h1>
      <form>
        <input
          type="text"
          className="todo-input"
          ref={inputElement}
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
      {input.map((item) => {
        return (
          <div className="todo-list">
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
  );
}

export default Todo;
