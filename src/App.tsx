import React, { useEffect } from 'react'
import './App.css'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'

function App() {
  // console.log('Appレンダリング')
  useEffect(() => {
    // console.log('useEffect')
  }, [])
  return (
    <div className="App">
      <AutoBatchEventHandler />
    </div>
  )
}

export default App
