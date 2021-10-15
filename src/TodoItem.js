import React from 'react';

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.item.task}</p>
    </div>
  );
};

export default TodoItem;
