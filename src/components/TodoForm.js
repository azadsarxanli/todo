import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      {props.edit ? (
        <>
          <input
            type=" text"
            placeholder="Update your item"
            value={input}
            onChange={changeHandler}
            name="text"
            className="todo-input edit"
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type=" text"
            placeholder="Add a todo"
            value={input}
            onChange={changeHandler}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
