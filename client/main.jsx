import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { App } from './src/App'
import { client, domain } from './src/services/config'
import './style.css'

createRoot(document.getElementById('app')).render(
  <Auth0Provider domain={domain} clientId={client} redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
)
