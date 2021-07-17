import React from 'react'
import TodoItem from './TodoItem'

 const TodoList = ({todos}) => (
     <ul>
       {todos.map(item => <TodoItem key={item.id} {...item} />)}
     </ul>
 );
export default TodoList