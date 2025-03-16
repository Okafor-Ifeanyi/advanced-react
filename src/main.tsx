import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.tsx'
// import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ToastContainer position='bottom-center' aria-label={undefined} /> */}
    <App />
  </StrictMode>,
)
