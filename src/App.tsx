import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Card from './components/Card'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Galery from './pages/Galery'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/galery' element={<Galery />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
