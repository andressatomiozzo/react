import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App101 from './pages/101-card-de-produto/App101'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App101 />
  </StrictMode>,
)
