
import { useState } from "react";
import { Container,Col, Row, Button, Form} from "react-bootstrap";

const Forms = () => {

    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    
    //엔터치면 팝업창으로 이름전송
    const [uname, setUname] = useState("");

    function inputChange(e){
        setUname(e.target.value)
    }

    function formSubmit(e){
        e.preventDefault();
        alert(uname);
    }

    //textarea
    const [mytxt, setMytxt] =useState("");

    function handleTxt(e){
       setMytxt( e.target.value);
    }

    return(
        <>
        <Container fluid>
            <Row>
                <Col md={3}>
                    <h1>Forms</h1>
                    <form action=""> 
                        <label htmlFor="">Enter your name:</label>
                        <Form.Control value={name} onChange={handleChange}/>
                        <p>current name: {name}</p>
                    </form>
                </Col>
                <Col md={3}>
                    <h1>Submit</h1>
                    <form onSubmit={formSubmit}>
                        <label htmlFor=""> 이름:</label>
                        <Form.Control value={uname} onChange={inputChange}/>
                        <Button type="submit">전송</Button>
                    </form>
                </Col> 
                <Col md={3}>
                <form action="">
                    <h1> 💥 textarea </h1>
                    <p>장문의 글을 쓸때....</p>
                    <textarea name="" id="" value={mytxt} onChange={handleTxt}/>
                    <p>Current value: {mytxt}</p>
                </form>
                </Col>
                
            </Row>
        </Container>
        
        </>
    )
};

export default Forms;
