import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'; // react17
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// react17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// , document.getElementById('root'));

reportWebVitals()
