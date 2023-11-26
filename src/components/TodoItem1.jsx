import React from "react";

const TodoItem1 = () => {
  return (
      <div>
        <div class="row kg-row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">04/10/2023</div>
          <div class="col-2">
            <button type="submit" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
  );
};

export default TodoItem1;
