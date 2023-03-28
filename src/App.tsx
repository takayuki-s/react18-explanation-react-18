import React, { useEffect } from 'react'
import './App.css'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'
import AutoBatchOther from './components/AutoBatchOther'
import { Transition } from './components/Transition'

function App() {
  // console.log('Appレンダリング')
  useEffect(() => {
    // console.log('useEffect')
  }, [])
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
    </div>
  )
}

export default App
