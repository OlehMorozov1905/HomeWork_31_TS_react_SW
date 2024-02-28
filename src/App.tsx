import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { useState } from 'react'
import { navItems } from './utils/constants'
import { StarWarsContext } from './utils/hookUseContext'

function App() {

  const [page, setPage] = useState(navItems[0])

  return (
    <div className="container-fluid">
      <StarWarsContext.Provider value={{page, setPage}}>
        <Header />
        <Main />
        <Footer />
      </StarWarsContext.Provider>
    </div>
  )
}

export default App
