import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App205 from './pages/205-toggle_de_tema/App205'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App205 />
  </StrictMode>,
)
