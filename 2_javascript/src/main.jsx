import { createRoot } from 'react-dom/client'
//main.jsx 단독으로 실행할때도 남겨야한다.
import './assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'; //기본 부트스트랩 cdn

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./include/Header"
import Home from "./Home"
//자바스크립트학습
import Es6 from './sub/Es6'
import Geo from './sub/Geo'
import Async from './sub/Async'

import Fx from './sub/func/Fx';
import Re from './sub/func/Re';
import Cate from './sub/func/Cate';
import MyDate from './sub/date/MyDate';
import Temporal from './sub/date/temporal';
import DateVsTemp from './sub/date/DateVsTemp';

//css학습
import Flex from "./sub/Flex"
import Grid from './sub/Grid'
import Layout from './sub/Layout'
import FlexWeb from './sub/FlexWeb';


function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/es6' element={<Es6/>}></Route>
        <Route path='/geo' element={<Geo/>}></Route>
        <Route path='/async' element={<Async/>}></Route>
        <Route path='/fx' element= {<Fx/>}></Route>
        <Route path='/re' element= {<Re/>}></Route>
        <Route path='/cate' element= {<Cate/>}></Route>

        <Route path='/date' element= {<MyDate/>}></Route>
        <Route path='/temp' element= {<Temporal/>}></Route>
        <Route path='/datevstemp' element= {<DateVsTemp/>}></Route>


        <Route path='/flex' element={<Flex/>}></Route>
        <Route path='/flexweb' element={<FlexWeb/>}></Route>
        <Route path='/grid' element={<Grid/>}></Route>
        <Route path='/layout' element={<Layout/>}></Route>

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