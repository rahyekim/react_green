import { createRoot } from 'react-dom/client'
//main.jsx 단독으로 실행할때도 남겨야한다.

import './assets/scss/style.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./include/Header"
import Home from "./Home"
import Flex from "./sub/Flex"
import Es6 from './sub/Es6'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/flex' element={<Flex/>}></Route>
        <Route path='/es6' element={<Es6/>}></Route>
      </Routes>


    </BrowserRouter>
    </>
  )
}

createRoot(document.getElementById('skz')).render(
  <App />
)




/*
최초설치시....
import { StrictMode } from 'react'
import App from './App.jsx'


<StrictMode> 
<App />
</StrictMode>,
*/