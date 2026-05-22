import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App211 from './pages/211-cronometro_com_useRef/App211'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App211 />
  </StrictMode>,
)
