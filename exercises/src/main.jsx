import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App212 from './pages/212-Contador_de_renders/App212'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App212 />
  </StrictMode>,
)
