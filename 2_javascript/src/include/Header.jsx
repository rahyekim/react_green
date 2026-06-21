import { Link } from "react-router-dom";

import { Button, Container, Form , Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = ( ) => {

    return (
        <>
    <Navbar expand='lg' className="bg-body-tertiary">
       <Container fluid>
            {/*로고 */}
            <Navbar.Brand href="/">React</Navbar.Brand>
            {/*햄버거 메뉴*/}
            <Navbar.Toggle aria-controls="navbarScroll"/>
            {/*드롭다운 메뉴 */}
            <Navbar.Collapse id="navbarScroll">
               <Nav className="me-auto my-2 my-lg-0"
               navbarScroll
               >
                <Nav.Link href="">JSX</Nav.Link>
                <Nav.Link href="">Components</Nav.Link>
                <Nav.Link href="">Class</Nav.Link>
                <Nav.Link href="">Props</Nav.Link>
                <Nav.Link href="">Event</Nav.Link>
                <Nav.Link href="">Forms</Nav.Link>
                <Nav.Link href="">Router</Nav.Link>
                <Nav.Link href="">HOC</Nav.Link>
                <Nav.Link href="">HOOKS</Nav.Link>

                <NavDropdown 
                    title="es6" 
                    id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/es6">es6소개</NavDropdown.Item>
                    <NavDropdown.Item href="/async">비동기</NavDropdown.Item>
                    <NavDropdown.Item href="/es6">es6소개</NavDropdown.Item>
                    <NavDropdown.Item href="/es6">es6소개</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/geo">위치기반</NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href="" disabled>사용하지않을때</Nav.Link>
               </Nav>
               <Form className="d-flex">
                <Form.Control 
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-2"/>
                    <Button variant="outline-success">Search</Button>
               </Form>
            </Navbar.Collapse>
       </Container>
    </Navbar>
        </>
    )
}

export default Header;


/**
 <nav>
           <Link to='/'>Home</Link> |
           <Link to='/flex'> float vs flex vs grid</Link> |
           <Link to='/es6'>Es6 인트로</Link>
        </nav>



Navbar        = 전체 nav 바
Container     = 가운데 정렬 박스
Navbar.Brand  = 로고
Navbar.Toggle = 햄버거 버튼 (모바일)
Navbar.Collapse = 펼쳐지는 메뉴
Nav           = 메뉴 그룹
Nav.Link      = 메뉴 하나

Navbar = 구조 + Collapse(써야 메뉴열림) + Toggle 조합으로 반응형 nav 자동 완성
 */