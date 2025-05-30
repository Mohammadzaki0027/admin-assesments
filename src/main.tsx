import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
</Provider>
  </StrictMode>,
)
