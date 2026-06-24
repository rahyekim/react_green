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