import styled from 'styled-components';
import { Link } from 'react-router-dom';

//🌟CSS 코드를 입힌 나만의 맞춤형 태그(컴포넌트)를 만든다.

//전체 네비게이션 바 컨테이너
export const NavBar = styled.nav`
    background-color: #333;
    padding: 1rem 2rem ; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//로고스타일

export const Logo = styled.h1`

color: #fff; margin:0 ; font-size: 1.5rem;

`;

//메뉴 링크들을 담는 박스
export const NavLinks = styled.div`
    display:flex; gap:20px;
`;


export const StyledLink = styled(Link)`
    color : #aaa ;
    text-decoration: none;
    font-size:1.2rem;
    font-weight: bold;
    transition: color 0.2s ease-in-out;

    &:hover{
        color: #fff;
    }


`;

export const PageContainer = styled.div`
    padding: 2rem;


`;



//🔥 핵심 1: styled.xxx  button만들기 css만들기 div만들기
//🔥 핵심 2: 백틱` ` 안은 CSS
//🔥 핵심 3: 사용=> <Box> : Box는 이제 “스타일 입힌 div”
//🔥 핵심 4: props로 스타일 바꾸기 (읽기만)


/*
🧠 Styled Components =

“HTML 태그 + CSS를 JS 안에 합쳐놓은 것”

const 컴포넌트이름 = styled.태그`
  CSS
`;

*/