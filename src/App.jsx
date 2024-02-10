import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCetagory from './Pages/ShopCetagory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSingup from './Pages/LoginSingup'
import Footer from './Components/Footer/Footer'
import mens_banner from './Components/Assets/banner_mens.png'
import womens_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
    <Routes>

    <Route path='/' element ={<Shop />} />
    <Route path='/mens' element ={<ShopCetagory banner ={mens_banner} category ="men" />} />
    <Route path='/womens' element ={<ShopCetagory banner={womens_banner} category ="women"/>} />
    <Route path='/kids' element ={<ShopCetagory banner={kids_banner} category ="kid" />} />
    <Route path='/product' element ={<Product />}>
      <Route path=':productId' element={<Product />} />
    </Route>
    <Route path='/cart' element ={<Cart />} />
    <Route path='/login' element ={<LoginSingup />} />

    </Routes>
    <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App
