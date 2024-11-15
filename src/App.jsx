import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import AboutIns from './Components/AboutIns'
import AboutSoLS from './Components/AboutSoLS'
import AboutConference from './Components/AboutConference'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="fixed  inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    <div className=' mx-7'>

   
      <Header/> 
      <AboutIns/>
      <AboutSoLS/>
      <AboutConference/>
      </div>
    </>
  )
}

export default App
