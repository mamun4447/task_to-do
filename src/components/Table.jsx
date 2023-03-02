import React from "react";
import AddToDo from "./AddToDo";
import SingleToDo from "./SingleToDo";

const Table = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-5">My To-Do</h1>
      <SingleToDo />
      <div className="text-center">
        <label htmlFor="my-modal-6" className="btn m-5">
          Add
        </label>
      </div>
      <AddToDo />
    </div>
  );
};

export default Table;
