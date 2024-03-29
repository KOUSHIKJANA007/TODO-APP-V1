import React from 'react'
import TodoItem from "./TodoItem";

const TodoItems = ({todoItems,onDeleteClick}) => {
  return (
    
    <div>
        {todoItems.map((item)=>(
          <TodoItem key={item.name} onDeleteClick={onDeleteClick} todoname={item.name} tododate={item.duedate} />
        ))}   
    </div>
  )
}

export default TodoItems