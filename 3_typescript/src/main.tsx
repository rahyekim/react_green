import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as M from './Main.styles'

import Home from './sub/Home';
import Basic from './sub/Basic';
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
            <li><M.StyledLink to="/link2">Link 2</M.StyledLink></li>
          </ul>
        </M.Nav>
        {/*✨ 레이아웃은 유지하고 content만 교체 ✨*/}
        <M.Content>
          <Routes>
            <Route path='/' element={<Navigate to="/home" replace/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/basic' element={<Basic title="hello"/>}></Route>
          </Routes>
        </M.Content>

        <M.SideBar>Side바ㅏㅏㅏ</M.SideBar>
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
