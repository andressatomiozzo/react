import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App102 from './pages/102-botao/App102'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App102 />
  </StrictMode>,
)
