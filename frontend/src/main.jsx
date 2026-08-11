import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'
import { JobProvider } from './contexts/JobContext.jsx'
import { ApplicationProvider } from './contexts/ApplicationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <JobProvider>
          <ApplicationProvider>
            <App />
          </ApplicationProvider>
        </JobProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
