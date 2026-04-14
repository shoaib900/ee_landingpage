import React from 'react'
import Home from './routes/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
