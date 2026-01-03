import React from "react";
import "./Taskform.css";
import Tag from "./Tag";
const TaskForm = () => {
  return (
    <div>
      <header className="app_header">
        <form action="">
          <input
            type="text"
            placeholder="enter ur task"
            className="task_input"
          />
          <div className="task_form_buttom_line">
            <div>
              <Tag name="Html" />
              <Tag name="CSS" />
              <Tag name="JS" />
              <Tag name="React-JS" />
            </div>
            <div>
              <select name="" id="" className="task_status">
                <option value="todo">todo</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
              </select>
            </div>
            <button type="submit" className="task_submit">
              + Add task
            </button>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
