import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';

//스타일드 컴포넌트 linking
import Nav from './include/Nav';

const App = () => {
  return (
    <>
    <BrowserRouter>
     
    <Nav/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
};

createRoot(document.getElementById('root')!).render(
    <App />
)
