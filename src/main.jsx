import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='228870729228-7put7dk5pm3efmpic7lan3j5sk8g0uum.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>

)
