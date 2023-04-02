import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'; // react17
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // React.StrictModeでwrapしていることによってmountが2回走るような挙動になる
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)

// react17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// , document.getElementById('root'));

reportWebVitals()
