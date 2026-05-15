import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App204 from './pages/204-lista-de-tarefas/App204'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App204 />
  </StrictMode>,
)
