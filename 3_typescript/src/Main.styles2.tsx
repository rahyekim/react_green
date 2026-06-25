import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}
`;

const sm =  "567px";
const md =  "768px";

//1)
export const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    gap:20px;
    min-height: 100vh; //🔵화면 전체 높이 확보// 없으면 내용만큼만 높이 생김

    & > * {
        border: 1px solid green;
        background-color: beige;
        padding: 18px;
        grid-column: 1 / span 12;
    }
    @media (min-width: ${sm}){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100px 1fr 100px;
    }
     @media (min-width: ${md}){
        grid-template-columns: 300px 1fr 300fr;
        grid-template-rows: 200px 1fr 200px;
    }
`;

export const Head = styled.header`  //상속 
   grid-row: 1/2;
`;

export const NavBar = styled.nav`

    ul{
        list-style: none;
        margin:0; padding:0;

        @media (min-width: ${sm}){
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        @media (min-width: ${md}){
            flex-direction: column;
        }
    }
    @media (min-width: ${md}){
        grid-column: 1 / -1;
        grid-row: 2/3;
     
    }
`;
// nav ul li a 대신에 리액트 라우터 link 스타일링

export const StyledLink = styled(Link)`
    color:blue;
    text-decoration: underline;
    display: inline-block;
    padding: 2px 0;
`;
//가운데 라우터가 교체될 본문 영역 !
export const Content = styled.div`
    @media ( min-width : ${sm} ){
        /* grid-column:  2 / 10; */

    }
    @media ( min-width : ${md} ){
        /* grid-column:  3 / span 8;
        grid-row : 2 / 4; */
    }
`;


export const SideBar = styled.div`


     @media ( min-width : ${sm} ){
        grid-column:  1 /  2;
        grid-row: 2/-1 ;

    }
    @media ( min-width : ${md} ){
        grid-column: / span 2;
        grid-row : auto;
    }
`;

export const Ads = styled.div`


     @media ( min-width : ${sm} ){
        /* grid-column: 1 / span 3;
        grid-row: 4; */

    }
    @media ( min-width : ${md} ){
        /* grid-column:  11 / span 2;
        grid-row: 2 / 3
         */
    }
`;

export const Footer = styled.div`
      @media ( min-width : ${sm} ){
        /* grid-column: 4 / span 9;
        grid-row: 4; */

    }
    @media ( min-width : ${md} ){
        /* grid-column:  1 / span 12; */

    }
`;


/*

🔥 핵심 1: styled.xxx  button만들기 css만들기 div만들기
🔥 핵심 2: 백틱` ` 안은 CSS
🔥 핵심 3: 사용=> <Box> : Box는 이제 “스타일 입힌 div”
🔥 핵심 4: props로 스타일 바꾸기 (읽기만)



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