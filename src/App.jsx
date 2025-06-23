import { useState } from 'react'
import './App.css'
import SearchData from './components/SearchData'
import Testando from './components/Testando'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <SearchData />
      
      <Testando />
    </>
  )
}

export default App
