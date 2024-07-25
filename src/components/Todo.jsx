import React, { useState } from "react";

function Todo() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handleRemove = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-slate-950  w-[40rem]  pl-10 pt-10 m-auto mt-3 rounder h-[700px] overflow-auto">
      <h1 className="text-center text-white text-4xl  font-bold mr-8 mb-8">
        Todo List
      </h1>
      <input
        className="bg-slate-700 h-12 w-96  rounded text-white pl-2"
        type="text"
        placeholder="Add a task"
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
      />
      <button
        className="bg-slate-500 h-12 ml-4 px-4 rounded"
        onClick={() => {
          if (value.trim() !== "") {
            setData((prevValue) => [...prevValue, value]);
         setValue("")
          } else {
            alert("Type anything...!");
         
          }
        }}
      >
        New list
      </button>
      <ul>
        {data.map((value, index) => {
          return (
            <div className=" flex w-96  rounded mt-4 items-center  justify-around">
              {" "}
              <li className=" bg-slate-200 rounded w-80  p-1" key={index}>
                {value}
              </li>
              <button
                className=" bg-slate-500 p-1 rounded"
                onClick={() => handleRemove(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
