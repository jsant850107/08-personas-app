import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { PersonasApp } from './PersonasApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
      <PersonasApp/>
    
    </BrowserRouter>
  </React.StrictMode>,
)
