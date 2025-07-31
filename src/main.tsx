import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './features/store'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Analytics />
    </Provider>
  </StrictMode>
)
