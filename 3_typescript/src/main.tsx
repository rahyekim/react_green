import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as M from './css/Main.styles'

import Home from './sub/Home';
import Basic from './sub/Basic';
import Special from './sub/Special';
import Test from './sub/Test';
import TestHome from './TestHome';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <M.GlobalStyle/>
      <M.Container>
        <M.Head>Type Script</M.Head>
        <M.Nav>
          <ul>
            <li><M.StyledLink to="/">home</M.StyledLink></li>
            <li><M.StyledLink to="/basic">Basic</M.StyledLink></li>
            <li><M.StyledLink to="/special">Special</M.StyledLink></li>
            <li><M.StyledLink to="/test">test</M.StyledLink></li>
          </ul>
        </M.Nav>
        {/*✨ 레이아웃은 유지하고 content만 교체 ✨*/}
        <M.Content>
          <Routes>
            <Route path='/' element={<Navigate to="/home" replace/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/basic' element={<Basic/>}></Route>
            <Route path='/special' element={<Special/>}></Route>
            <Route path='/test' element={<Test/>}>
                <Route path='home' element={<TestHome/>}></Route>
            </Route>
          </Routes>
        </M.Content>

        <M.SideBar>Side바</M.SideBar>
        <M.Ads>ads</M.Ads>
        <M.Footer>the footer</M.Footer>


      </M.Container>
    </BrowserRouter>
     
     
    </>
  )
};

createRoot(document.getElementById('root')!).render(
    <App />
)
