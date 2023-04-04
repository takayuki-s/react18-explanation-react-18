import React, { Suspense, useEffect } from 'react'
import './App.css'
import AutoBatchEventHandler from './components/AutoBatchEventHandler'
import AutoBatchOther from './components/AutoBatchOther'
import { ReactQuery } from './components/ReactQuery'
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
      <hr />
      <Suspense fallback={<p>ロード中</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  )
}

export default App
