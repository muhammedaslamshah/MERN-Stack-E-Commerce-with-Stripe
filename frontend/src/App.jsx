import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'





const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7v] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Product' element={<Product/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/PlaceOrder' element={<PlaceOrder/>} />
        <Route path='/Orders' element={<Orders/>} />
      </Routes>
    </div>
  )
}

export default App
