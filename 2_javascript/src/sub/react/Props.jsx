

/*
//🌿👶 자식 컴포넌트 
const ProfileCard = ({userInfo, isActive, onToggleStatus, rightSlot, children})=> {

    return(
        <>

        <div style={{
            border: `2px solid ${isActive? "blue" : "pink"}`,
            padding: "20px",
            borderRadius: "10px",
            margin: "10px 0",
            opacity: isActive ? 1 : 0.6
            }}></div>
        <div style={{
            display:"flex"

            
        }}></div>
        
        </>
    )
}
*/







function Car(props) {  //자동차 컴포넌트

    return( 
        <>
        <h2>i am a {props.brand} </h2>
        </>
    )
}



const Props = () => {

    return (

        <>
       <h1>✨ properties ▶️ props</h1>
       <p>
        (1) props는 속성을 나타냅니다
        (2) react 컴포넌트에 전달되는 인자 
        (3) 여러 속성을 전달
        (4) 🌳 부모(상급자)👨‍👩‍👧 가  🌿자식(하급자)👶에게 업무 지시서와 재료를 내려줌

       </p>

        <p> 
            <h3>내 차고에는 무슨 차?</h3>
            <Car brand="벤츠"/>
        </p>
        </>
    ) 
};

export default Props;