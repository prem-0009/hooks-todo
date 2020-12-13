import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

const Todos = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const [message, setMessage] = useState({
    error: true,
    errorMessage: "write some",
  });

  const handleOnInputChange = (e) => {
    console.clear();
    // console.log(e.target.value);

    //the first todo is set to new value
    setTodo(e.target.value);
  };

  const handleOnAdd = (e) => {
    e.preventDefault();
    console.clear();

    if (!todo) {
      setMessage({ error: true, errorMessage: "write some" });
      return; //to make sure if the above condition is true..the code doesn't run any further..
    } else {
      setMessage({ error: false, errorMessage: "" });
    }
    // console.log(e.target.value);

    let newTodo = { value: todo, id: uuidv4(), isComplete: false };
    setList([...list, newTodo]);

    //why all the list now showing in console????????????????
    //it is coz like in line 32..it is only logging the list and now logging the newTodo..so how do i see all of them..???????
    // console.log("list", list);

    //making the value empty string again
    e.target.value = "";

    //making the input field blank after adding to the list????
    setTodo(e.target.value);
  };

  const handleOnDelete = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });

    setList(newList);
  };

  const handleOnComplete = (id) => {
    console.clear();
    console.log("hi");
    //find the position of list in array to strike through
    const foundIndex = list.findIndex((listId) => listId.id === id);
    //editing the found list to true

    if (list[foundIndex].isComplete === true) {
      list[foundIndex].isComplete = false;
    } else {
      list[foundIndex].isComplete = true;
    }

    //re updating the list
    const newList = [...list];

    setList(newList);
    //to check if the update shows up
    // console.log(list);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {message.error ? message.errorMessage : ""}
      <form
        onSubmit={handleOnAdd}
        style={{ textAlign: "center", marginTop: "15%" }}
      >
        <input type="text" value={todo} onChange={handleOnInputChange} />
        <button onClick={handleOnAdd}>add</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id} style={{ textAlign: "center" }}>
            <span
              onClick={() => handleOnComplete(item.id)}
              className={item.isComplete ? "strikeThrough" : ""}
            >
              {item.value}
            </span>

            <span onClick={() => handleOnDelete(item.id)}> delete</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
