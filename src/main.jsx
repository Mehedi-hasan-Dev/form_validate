import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './components/form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form/>
  </StrictMode>,
)