import React from 'react'
import Home from './routes/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Todo from './routes/Todo'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/todo" element={<Todo /> } />
      </Routes>

      <Bottombar />
      
    </div>
    </BrowserRouter>
  )
}

export default App
