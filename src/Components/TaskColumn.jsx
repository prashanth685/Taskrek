import React from "react";
import todo from "../assets/todo.jpg";

const TaskColumn = () => {
  console.log(todo);
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={todo} className="task_column_icon" />
        </h2>
      </section>
    </div>
  );
};

export default TaskColumn;
