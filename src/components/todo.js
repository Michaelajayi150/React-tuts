import React from "react";

function Todo({ handleSubmit, inputElement, tab }) {
  return (
    <div className="">
      <h1>What's Your Plan For Today</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" ref={inputElement} />
        <button type="submit" className="todo-btn">{tab}</button>
      </form>
    </div>
  );
}

export default Todo;
