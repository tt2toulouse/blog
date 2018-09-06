import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
