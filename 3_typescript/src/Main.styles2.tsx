import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

//🌟CSS 코드를 입힌 나만의 맞춤형 태그(컴포넌트)를 만든다.

//반응형 크기 기준점 변수
const sm = '576px'
const md = '768px'

export const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
}
`;



//전체 레이아웃을 감싸는 그리드 컨테이너
export const Container = styled.div`

    display : grid;
    grid-template-columns : repeat(12, [col-start] 1fr);
    gap:20px;

        /*mobile first*/
        & > * {
        border : 1px solid green;
        background-color: beige;
        padding: 10px;
        }

`;



//전체 네비게이션 바 컨테이너
export const NavBar = styled.nav`
    background-color: #333;
    padding: 1rem 2rem ; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul{
    list-style: none; margin:0 ; padding: 0;

    @media (min-width: ${sm}){
        display : flex; justify-content:space-between;
}
    @media (min-width: ${md}){
        flex-direction: column;
}
    }
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
export const Content = styled.main`

    @media (min-width: ${sm}){
        grid-column: col-start 4/ span 9 ;
    }
    @media (min-width: ${md}){
        grid-column: col-start 3/ span 8 ;
        grid-row: 2 /4;
    }
`;
export const Sidebar = styled.aside`

    @media (min-width: ${sm}){
        grid-column: col-start; span 3;

    }
    @media (min-width: ${md}){
        
    }


`;
export const Ads = styled.div`

    @media (min-width: ${sm}){

    }
    @media (min-width: ${md}){
        
    }
`;

export const Footer = styled.footer`

    @media (min-width: ${sm}){

    }
    @media (min-width: ${md}){
    
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

✅ 기본 원칙
레이아웃 = Grid
정렬 = Flex
이거 섞는 게 핵심

✅ Grid “선(line)” 기준

| 1 | 2 | 3 | 4 |

grid-column : 2/4; (두칸 차지 2,3)

grid-column: 1 / -1; 전체차지 

❗ React Router는 “페이지 스위칭 담당”

👉<Routes> 밖 = 고정 UI (Nav, Header) 💡 항상보임
👉<Routes> 안 = 페이지 (Home, About) 💡 바뀌는 화면


🟢 URL 상태에 따라 컴포넌트를 바꿔 끼우는 것 🔵 컴포넌트 교체
👉 화면(element) 교체 ( 페이지 이동 ❌ )

🚨 
✔ 페이지 새로고침 없음
✔ HTML 새로 받는 구조 아님
✔ 컴포넌트만 교체됨 (SPA)

import { Outlet } from "react-router-dom";

👉 현재 라우트의 자식 페이지를 여기다 보여줘” 역할을 하는 예약된 컴포넌트
⭕ <Outlet /> = 자식 들어오는 자리
<Routes>
  ├ Route (Layout)
      ├ Route (Home)
      ├ Route (About)
</Routes>

🔵  grid-template-rows: auto 1fr auto;
👉 “3줄 구조로 고정”

header = auto
main = 남은 공간 (1fr)
footer = auto

🔵 min-height: 100vh;
화면 전체 높이 확보// 없으면 내용만큼만 높이 생김
*/