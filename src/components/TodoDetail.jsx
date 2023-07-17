import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // API 호출을 통해 특정 본문 가져오기
    // axios.get(`/api/todos/${id}`)
    //   .then(response => setTodo(response.data))
    //   .catch(error => console.error(error));

    // 예시 데이터
    const sampleTodo = {
      id: parseInt(id),
      title: `Todo ${id}`,
      content: `Content ${id}`,
    };
    setTodo(sampleTodo);
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
    </div>
  );
};

export default TodoDetail;
