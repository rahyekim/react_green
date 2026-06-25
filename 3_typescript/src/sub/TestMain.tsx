import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as S from '../Main.styles2';

//스타일드 컴포넌트 linking
import Nav from '../include/Nav';
import Home from '../Home';

const TestMain = () => {
  return (
    <>
    
    <BrowserRouter>
     <S.GlobalStyle/> {/*전역스타일 */}
      <S.Container>
        <Nav/>
        <S.Content>
          <h1>Content Area</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, maiores?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </S.Content>
        <S.Sidebar>
          Sidebar
        </S.Sidebar>

        <S.Ads> Ads </S.Ads>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
       </S.Container>
    </BrowserRouter>
   
    </>
  )
};

export default TestMain;
