import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './component/Search'
import Data from './component/Data'
import AllItems from './component/AllItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Data>

      <Search></Search>
      <AllItems></AllItems>
    </Data>
    </>
  )
}

export default App
