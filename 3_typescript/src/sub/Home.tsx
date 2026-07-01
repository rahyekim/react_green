import { useState, useEffect } from "react";

export default function Home (){

    //타이머 실행여부
    const [isRunning, setIsRunning]=useState(true);
    // 남은시간..째깎ㅈ쨰깍
    const [timeLeft, setTimeLeft]= useState(60);

    useEffect(()=>{
        //실행중아니면 타이머종료
        if(!isRunning) return;
        const timer = setInterval(() => {
            setTimeLeft(prev=>{
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsRunning(false);
                    return 0;}
                return prev-1;
        });
        }, 1000);
        return ()=>clearInterval(timer); //정리함수
    }, [isRunning]); //타이머 감시중...

    const handleAddFiveMinutes=()=>{
        setTimeLeft(prev=> prev+300);
    }

    const handleCancel = ()=>{
        setIsRunning(false);//타이머 멈춤
        setTimeLeft(0); //화면도 0
    };

    const formatTime = (seconds:number)=>{
        const minutes = Math.floor(seconds/60);
        const remainSeconds= seconds % 60;

        return `${String(minutes).padStart(2,'0')}
        : ${String(remainSeconds).padStart(2,'0')}`
    }

    return(
        <>
       <h3>남은시간: {formatTime(timeLeft)}</h3>  
       <button onClick={handleAddFiveMinutes}>+5분추가</button>
       <button onClick={handleCancel}>취소</button>
        </>
    )
}