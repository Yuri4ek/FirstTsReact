import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
