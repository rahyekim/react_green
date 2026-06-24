import { useState } from "react";
//1회차 그냥쓰기
//2회차 안 보고 쳐보기 막히면 보기
// 3단계 응용하기
function MyPractice() {
  const [form, setForm] = useState({
    name: "",
    fruit: "",
    agree: false
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers(prev => [
      ...prev,
      {
        id: Date.now(),
        ...form
      }
    ]);

    setForm({
      name: "",
      fruit: "",
      agree: false
    });
  };

  const handleDelete = (id) => {
    setUsers(prev =>
      prev.filter(user => user.id !== id)
    );
  };

  return (
    <>
      <h1>회원 등록</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름"
        />

        <h3>좋아하는 과일</h3>

        <label>
          <input
            type="radio"
            name="fruit"
            value="apple"
            checked={form.fruit === "apple"}
            onChange={handleChange}
          />
          사과
        </label>

        <label>
          <input
            type="radio"
            name="fruit"
            value="banana"
            checked={form.fruit === "banana"}
            onChange={handleChange}
          />
          바나나
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          동의합니다
        </label>

        <br />

        <button type="submit">
          등록
        </button>
      </form>

      <hr />

      <h2>회원 목록</h2>

      {users.length === 0 ? (
        <p>등록된 회원 없음</p>
      ) : (
        users.map(user => (
          <div key={user.id}>
            <p>
              이름: {user.name}
            </p>

            <p>
              과일: {user.fruit}
            </p>

            <p>
              동의 여부:
              {user.agree ? " O" : " X"}
            </p>

            <button
              onClick={() => handleDelete(user.id)}
            >
              삭제
            </button>

            <hr />
          </div>
        ))
      )}
    </>
  );
}

export default MyPractice;