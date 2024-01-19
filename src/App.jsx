import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import './App.css';
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
 
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, {
      name: itemName,
      duedate: itemDate
    }];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem=(DeleteItemName)=>{
    const newItem=todoItems.filter((item)=>item.name !== DeleteItemName);
    setTodoItems(newItem);
  }
  return (
    <center className="todo-container">
      <AppName />
      <div className="container">
        <AddTodo onAddItems={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
