import { useState } from "react";

export default function Mypractice() {

  const [form, setForm] = useState({
    name:"",
    fruit:"",
    agree:false
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e)=>{
    const {name, value, type, checked} = e.target;

    setForm(prev=>({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setUsers(prev => [
      ...prev,
      {
        id: Date.now(), //new Date()??
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
    setUsers(prev => (
      prev.filter(user=> user.id !==id)
    ));
  }

  return(
    <>
    <h1 style={{padding: '20px'}}> 📢회원등록</h1>
    <form onSubmit={handleSubmit}>
      <label >이름:</label>
      <input placeholder="이름"
        type="text" name="name" onChange={handleChange} value={form.name}/>
    <h3 style={{padding: "10px"}}> 좋아하는 과일 🍇 </h3>
  
    <label>
      <input type="radio" 
        checked={form.fruit === "apple"} 
        name="fruit" 
        value="apple"
        onChange={handleChange}
      />
    🍎사과</label>
    
    <label >
      <input type="radio"
      name="fruit"
      value="banana"
      checked={form.fruit === "banana"}
      onChange={handleChange}
       />🍌바나나</label>
      
      <label>
        <input type="radio"
        name="fruit"
        value="pineapple"
        checked={form.fruit === "pineapple"}
        onChange={handleChange}
         />
        파인애플🍍</label>
      <br />
     
      <label>
        <input 
        type="checkbox" 
        name="agree"
        checked={form.agree}
        onChange={handleChange}
        />
        동의합니다</label>
        <button
        style={{ padding: "10px",borderRadius:"10px", border:"2px solid blue"}} 
        type="submit">등록</button>
    </form>

    <hr />

    <h2>📚 회원 목록</h2>

    {users.length === 0 ? (<p> 등록된 회원 없음</p>) :

    (users.map(user=>(
       <div key={user.id}>
        <p>
          이름: {user.name}
        </p>
        <p>
          과일: {user.fruit}
        </p>
        <p>
          동의: {user.agree ? "0" : "X"}
        </p>
        <button onClick={()=>handleDelete(user.id)}> 삭제 </button>
      <hr />
       </div>
    ))
   )
  }
    
    </>
  )
  
  
  
  
}