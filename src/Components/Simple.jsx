import React, { useState } from "react";

const Simple = () => {
  const [tasks, settasks] = useState(0);
  const [input, setinput] = useState("");
  const persons = ["p1", "p2", "p3"];
  console.log(tasks);
  function handleChange(e) {
    setinput(e.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="enter name" onChange={handleChange} />
      <h1>{input}</h1>
      {persons.map((person) => {
        return <h1 key={person.id}>{person}</h1>;
      })}
    </div>
  );
};

export default Simple;
