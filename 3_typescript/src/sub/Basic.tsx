type BasicProps = {
    title: string; //타이틀 타입이 문자열 //👉무조건잇어야함
    children?: React.ReactNode; // 👉?(존재여부)없어도됨 : 모든 값
};

/*
카드 컴포넌트가 부모에게서 받아올 데이터 props 의 
이름과 type(종류)을 미리 지정해 두는 일종의 설계도

🟢 ? : prop이 있어도 되고 없어도 된다 선택사항 (존재 여부)
🔵 React.ReactNode : 리액트에서 화면에 그릴수있는 모든 값
(html태그 문자열 다른 리액트 컴포넌트등을 다 허용하겠다는 뜻)
*/

const Basic = ({title, children}: BasicProps) => {

    return(
        <>
        <div className="" title="공지사항"></div>
            <p>{title}</p>

        </>
    )
};

const Ext = () => {
    return(
        <>
        <h1> 📚 명시적 타입과 타입 추론</h1>
            <p>
                (1): 명시적 타입 지정: 변수의 타입을 명시적으로 선언 <br />
                - 함수 매개변수 및 반환 <br />
                - 객체 리터럴 <br />
                - 초기값이 최종 유형과 다를 수 있는 경우 <br />
                <code>
                    String 👉
                    greeting: string = "hello Typescript" <br />
                    Number 👉
                    userCount: number = 42; <br />
                    Boolean 👉
                    isLoading : boolean = true; <br />
                    Array of numbers 👉
                    scores: number[] = [100,99] ; <br />

                </code>
                <hr />
                (2): 타입추론: typescript 는 할당된 값을 기반으로 타입을 자동 결정 <br />
                그럼 위에서 설명한 각 접근 방식은 언제 사용? <br />
                - 즉시 할당을 사용하는 간단한 변수 선언 <br />
                - 문맥상 타입이 명확한 경우  <br />
               
            </p>
        
        </>
    )
}


export default Ext;