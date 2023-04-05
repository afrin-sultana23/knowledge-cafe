import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ContentSection from './Components/ContentSection/ContentSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header></Header>
        <ContentSection/>
    </div>
  )
}

export default App
