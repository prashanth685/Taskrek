import React from "react";
import todo from "../assets/todo.jpg";
import "./Taskcolumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ icon, Taskname }) => {
  console.log(todo);
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          {Taskname}
          <img src={icon} className="task_column_icon" />
        </h2>
        <TaskCard />
      </section>
    </div>
  );
};

export default TaskColumn;
