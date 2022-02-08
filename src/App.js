// z-index of social-icons >=1
// contact form height adjustment,px to em
// homepage mediaqueries 50% remaining
// hide social icons with > prompt to open it // like an aside for screen sizes upto incl. 499px //DONE: on touch devices
// import logo from './logo.svg'
import {BrowserRouter, Router,Route, Routes} from 'react-router-dom'

import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Social from './Components/Social'
import Home from './Components/Home'
import Contact from './Components/Contact'

//test
import Loader2 from './Components/test/Loader2'
import HomeComponent from './Components/test/HomeComponent'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Social />
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/loader' element={<Loader/>}/>
        <Route path='/loader2' element={<Loader2/>}/>
        <Route path='/homecomponent' element={<HomeComponent/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
