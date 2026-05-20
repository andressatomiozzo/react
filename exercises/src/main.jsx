import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App210 from './pages/210-Foco_no_input/App210'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App210 />
  </StrictMode>,
)
