import { useState , useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Temporal = ()=> {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h1>기존 Date의 문제점</h1>
                <p>
                    (1) 1월이 0부터 시작하는 기괴함 temporal= 1~12
                    (2) 원본데이터가 변하는 문제해결
                    기준날짜에 3을 더하면 원래 있던 기준 날짜 객체 자체의 값이
                    3일뒤로 덮어 씌워진다... 원본훼손... 파이썬 copy
                    불변성 원본은 그대로 둔채 3일이 더해진 새로운 결과물
                    (3) 객체에 짬뽕 시간, 날짜, 타임존
                    <code>Temporal , PlainDate </code>
                    (4) 울며 겨자먹기에 무거운 라이브러리
                    Moment.js, Day.js , date-fns 
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default Temporal ;