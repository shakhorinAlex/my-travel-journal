import React from 'react'
import './App.css'
import Header from './components/Header'
import Travels from './components/Travels'
import data from './data'

function App() {
  const cards = data.map(item => {
    return <Travels
      key={item.id}
      {...item}
      />
  });

  return (
    <div className="container">
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
