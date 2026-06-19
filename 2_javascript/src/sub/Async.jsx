import React, { useState } from "react";
import { Button, Alert, Card, Col, Row, Container} from "react-bootstrap";
import { data } from "react-router-dom";


const Async = () => {

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    
    //실행 함수
    const fetchWeather = async ()=> {

        setLoading(true);
        setError(null);

        try{
        const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
        
        if(!response.ok){
            throw new Error('데이터를 가져오는데 실패')
        }
        
        const data = await response.json()

        setWeather({
            city:'서울',
            temp: Math.floor(Math.random()*30)+1,
            desc: data.title.substring(0,10)
        });

        }catch(e){
            setError('네트워크 오류발생!')

        }finally{
            setLoading(false);
        }

        
    }
    
    return(
        <>
       <Container>
            <Row>
                <Col>
                <h3>날씨</h3>
                <Button 
                onClick={fetchWeather}
                variant="primary"
                disabled={loading}
                > {loading ? "불러오는중..." : "날씨확인"}</Button>
                {error && <Alert variant="danger" className="mt-3">
                    {error}
                    </Alert>}
                {weather && (
                    <Card className="mt-3">
                        <Card.Title>{weather.city}</Card.Title>
                        <Card.Text>
                            온도:{weather.temp}
                            상태:{weather.desc}
                        </Card.Text>

                    </Card>
                )}
                </Col>
            </Row>
       </Container>
        </>
    )
}

export default Async;