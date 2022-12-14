import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Contact />
      <Main />
      <Footer />
    </div>
  )
}

export default App
