import React from 'react'
import Header from './components/Header'
import './index.css'
import bg from "./assets/bg.png";
import Hero from './components/Hero';
import CardList from './components/CardList';


function App() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <CardList/>
    </div>
  )
}

export default App