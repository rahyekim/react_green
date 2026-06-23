import { useState, useEffect } from "react";
import { Container,Col, Row, Button } from "react-bootstrap";
import jQuery from "jquery";

const Intro = () => {

    return(
        <>
        <h1>Jquery</h1>
        <pre>
            과거 리액트가 생기기전에 아주 훌륭한ㄷ ㅐ안
            하늘에 태양이 두개있을 수 없음...
            jquery: 화면에 있는 태그를 직접 잡아서 색깔도 바꾸고 애니메이션을 넣어라
            react: 데이터 (state) 만 바꿔...
            리액트가 화면을 관리하고 있는데 jquery가 몰래 화면을 바꿔버리면 리액트 헷갈려 심각한 버그 발생....
            과거에 만들어진 아주 훌륭한 jquery플러그인( 달력 슬라이더)을 사용하는 것이 원칙..
            best로만들어진것만사용...하자... 
        </pre>
        
        </>
    )
};

export default Intro;