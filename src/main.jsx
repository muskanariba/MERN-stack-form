import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Signup from './Signup.jsx'
import App from './App.jsx'
import Login from './Login.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
