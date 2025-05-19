import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home';
import About from './Pages/Aboutus/About';
import Admin from './Pages/Admin/Admin';
import Shop from './Pages/Shop/Shop';
import NoPage from './Pages/NoPage/NoPage';
import Favorites from './Pages/Favorites/Favorites';
import Basket from './Pages/Basket/Basket';
import Detail from './Pages/Detail/Detail';
import { Add } from './Pages/Add/Add';


function App() {
  const [count, setCount] = useState(0)

  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="add" element={<Add/>} />
          <Route path="admin" element={<Admin />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="basket" element={<Basket/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
