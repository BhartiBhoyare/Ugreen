import React from 'react'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Category from './components/Category'
import HotSale from './components/HotSale'
import Simplify from './components/Simplify'

const App = () => {
  return (
    <div>
     <Navbar/>
     <MainNavbar/>
     <Category/>
     <HotSale/>
     <Simplify/>
    </div>
  )
}

export default App

