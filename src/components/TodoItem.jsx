import React from "react";

const TodoItem1 = ({ todoname, tododate, onDeleteClick }) => {
  return (
      <div>
        <div className="row kg-row">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button type="submit" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoname)}>
              Delete
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoItem1;
