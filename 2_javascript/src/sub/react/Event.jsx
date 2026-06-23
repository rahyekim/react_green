import React , {useState, useEffect} from "react";

const Event = () => {

    const shoot = () => {
        alert('great shot!')
    }
    
    const [userId, setUserID] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    
    //onsubmit 이벤트 핸들러

    const handleSubmit = (e)=>{
        e.preventDefault(); //⭐️⭐️ 브라우저 자동 새로고침 방지..꼭쎼트로 
                         //요즘은 리액트가 직접처리 ⭕fetch, axios로 직접 API 호출⭕

        alert(`제출된아이디: ${userId}`)
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            console.log("Enter키가 눌렸습니다")
        }
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={userId} onChange={e => setUserID(e.target.value)} 
            onKeyDown={handleKeyDown} placeholder="아이디 입력하세요" />
        </form>

        <button onClick={shoot}>Take the shoot</button>

        <h1>🔥 리액트에서 잘 사용하는 이벤트 🔥</h1>

        <p> 🌟🌟🌟
            (1) onClick : 마우스 클릭
            (2) onChange : 값 변경  👉사용자가 입력창에 글자를 치거나 체크박스를 누를때 마다 실시간으로 발생
            (3) onSubmit : 폼 제출  👉 태그안에서 사용자가 제출submit 버튼을 누르거나 ✨enter키를 쳤을때 발생
            (4) onKeyDown : 키보드 입력 👉 사용자가 키보드를 눌렀을때 발생
            (5) onKeyUp : 누르고 뗄 때 
            (6) onMouseEnter & onMouseLeave : 마우스 호버 👉 :hover
        </p>
        
        
        
        </>
        
    )
};

export default Event;