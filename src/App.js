// z-index of social-icons >=1
// contact form height adjustment,px to em
//TODO: homepage mediaqueries 50% remaining
//TODO: hide social icons with > prompt to open it // like an aside for screen sizes upto incl. 499px
// import logo from './logo.svg'
import {BrowserRouter, Router,Route, Routes} from 'react-router-dom'

import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Social from './Components/Social'
import Home from './Components/Home'
import Contact from './Components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Social />
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loader' element={<Loader/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
