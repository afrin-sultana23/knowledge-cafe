import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ContentSection from './Components/ContentSection/ContentSection'
import Question from './Components/Questions/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header></Header>
        <ContentSection></ContentSection>
        <Question></Question>
    </div>
  )
}

export default App
