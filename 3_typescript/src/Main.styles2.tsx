import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}


`;
//반응형 크기 기준점 변수
const sm =  "567px";
const md =  "768px";

//1)
export const Container = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    gap:20px;
    /* grid-auto-rows: min-content; */

    min-height: 100vh; //🔵화면 전체 높이 확보// 없으면 내용만큼만 높이 생김

    & > * {
        border: 1px solid #ccc;
        background-color: #bdbda3;
        padding: 10px;
        /* grid-column: 1 / span 12; */
    }
    @media (min-width: ${sm}){
        grid-template-columns: 1fr 2fr;
       
    }
     @media (min-width: ${md}){
        grid-template-columns: 240px 1fr 240px;
       
    }
`;

export const Head = styled.header`  //상속 
        grid-column: 1 / -1;
   
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
  
    grid-column: 1 / -1;
    @media (min-width: ${md}){
        grid-column: 1 ;
        grid-row: 2/4;
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
     grid-column: 2;

    }
    @media ( min-width : ${md} ){
       grid-column: 2;
       grid-row: 2/4;
    }
`;


export const SideBar = styled.div`


     @media ( min-width : ${sm} ){
        grid-column: 1;
        grid-row: 3;

    }
    @media ( min-width : ${md} ){
        grid-column: 3;
       
    }
`;

export const Ads = styled.div`


     @media ( min-width : ${sm} ){
      grid-column: 1;

    }
    @media ( min-width : ${md} ){
       grid-column: 3;
       
    }
`;

export const Footer = styled.div`
    grid-column: 1 / -1;

    @media ( min-width : ${sm} ){
       grid-column: 2;

    }
    @media ( min-width : ${md} ){
        grid-column: 1 / -1;

    }
`;

export const PageContainer = styled.div`
padding:2rem; text-align:center; 
font-family:sans-serif;
`;


