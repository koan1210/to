import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // API 호출을 통해 본문 리스트 가져오기
    // axios.get('/api/todos')
    //   .then(response => setTodos(response.data))
    //   .catch(error => console.error(error));

    // 예시 데이터
    const sampleTodos = [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
      { id: 3, title: "Todo 3" },
    ];
    setTodos(sampleTodos);
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Todo</Link>
    </div>
  );
};

export default TodoList;
