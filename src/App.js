import React from "react";
import "./style.css";
import Header from './Header';
import TodoItem from './TodoItem';
import TodosData from './TodosData';

function App() {
  const todoItems = TodosData.map(item => <TodoItem key={item.id} item={item} />)
  return (
      <div className="data-list">
        <Header/>
        {todoItems}
    </div>
  );
}
export default App
