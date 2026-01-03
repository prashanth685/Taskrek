import React from "react";

const CreateTodo = () => {
  const tasks = 1;
  const counttask = () => {
    if (tasks === 0) {
      return "no task availble";
    } else {
      return `tasks ${tasks}`;
    }
  };
  return (
    <>
      <h1>{counttask()} </h1>
      <button value="add task">Add task</button>
    </>
  );
};

export default CreateTodo;
