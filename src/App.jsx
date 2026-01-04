import React from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumn from "./Components/TaskColumn";
import todo from "../src/assets/todo.jpg";
import doing from "../src/assets/doing.jpg";
import done from "../src/assets/done.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn Taskname="Todo" icon={todo} />
        <TaskColumn Taskname="Doing" icon={doing} />
        <TaskColumn Taskname="Done" icon={done} />
      </main>
    </div>
  );
};

export default App;
