import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 유효성 검증 로직 (예시)
    if (title.length < 2) {
      alert("제목은 2글자 이상 입력해주세요.");
      return;
    }

    // API 호출을 통해 새로운 본문 추가
    // axios.post('/api/todos', { title, content })
    //   .then(response => {
    //     console.log('Todo added successfully.');
    //     navigate('/');
    //   })
    //   .catch(error => console.error(error));

    // 예시 데이터
    console.log("Todo added successfully.");
    navigate("/");
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
