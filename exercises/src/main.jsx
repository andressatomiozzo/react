import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App201 from './pages/201-carrossel/App201'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App201 />
  </StrictMode>,
)
