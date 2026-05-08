import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App103 from './pages/103-title/App103'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App103 />
  </StrictMode>,
)
