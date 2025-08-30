import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "./components/ui/provider.jsx"
import {BrowserRouter} from "react-router"
import App from './App.jsx'
import AuthProvider from './context/AuthContext.jsx'
import ProgressPage from './components/elements/ProgressPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
          <ProgressPage/>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
