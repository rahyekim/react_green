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
    grid-template-columns: repeat(12, 1fr);
    gap:20px;
    /* min-height: 100vh; //🔵화면 전체 높이 확보// 없으면 내용만큼만 높이 생김 */

    & > * {
        border: 1px solid green;
        background-color: beige;
        padding: 18px;
        grid-column: 1 / span 12;
    }
`;

export const Head = styled.header`  //상속 

`;

export const Nav = styled.nav`

    ul{
        list-style: none;
        margin:0; padding:0;

        @media (min-width: ${sm}){
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @media (min-width: ${md}){
            flex-direction: column;
        }
    }
    @media (min-width: ${md}){
        grid-column: 1 /span 2;
        grid-row : 2/3;
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
        grid-column:  4 / span 9;

    }
    @media ( min-width : ${md} ){
        grid-column:  3 / span 8;
        grid-row : 2 / 4;
    }
`;


export const SideBar = styled.div`


     @media ( min-width : ${sm} ){
        grid-column:   1 / span 3;
        grid-row: 3;

    }
    @media ( min-width : ${md} ){
        grid-column: 11/ span 2;
        grid-row : auto;
    }
`;

export const Ads = styled.div`


     @media ( min-width : ${sm} ){
        grid-column: 1 / span 3;
        grid-row: 4;

    }
    @media ( min-width : ${md} ){
        grid-column:  11 / span 2;
        grid-row: 2 / 3
        
    }
`;

export const Footer = styled.div`
      @media ( min-width : ${sm} ){
        grid-column: 4 / span 9;
        grid-row: 4;

    }
    @media ( min-width : ${md} ){
        grid-column:  1 / span 12;

    }
`;