import React, { Suspense, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
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
      <ErrorBoundary fallback={<p>エラー</p>}>
        <Suspense fallback={<p>ロード中</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
