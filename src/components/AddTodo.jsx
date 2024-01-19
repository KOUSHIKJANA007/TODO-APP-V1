import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";

const AddTodo = ({ onAddItems }) => {
  const [todoName, setTodoName]=useState("");
  const [todoDate, setTodoDate]=useState("");
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  };
  const handleDateChange = (event)=>{
    setTodoDate(event.target.value);
  };
  const handleButtonClicked = ()=>{
    onAddItems(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div>
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" value={todoName} placeholder="Enter todo here" onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleDateChange}/>
          </div>
          <div className="col-2">
          <button type="submit" className="btn btn-success kg-button" onClick={handleButtonClicked}>
              <IoMdAddCircle/>
            </button>
          </div>
          </div>
    </div>
  )
}

export default AddTodo