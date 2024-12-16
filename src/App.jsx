import React from 'react'
import Header from './components/Header'
import './index.css';
import Image from './components/Image';
import Grids from './components/Grids';
import Pricing from './components/Pricing';
import FrequentQuestions from './components/FrequentQuestions';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Image />
      <Grids />
      <Pricing />
      <FrequentQuestions />
      <Footer />
    </div>
  )
}

export default App
