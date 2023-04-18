import { useAuth0 } from '@auth0/auth0-react'
import { Chat } from './pages/Chat'

export function App () {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    <div className='max-w-7xl mx-auto p-8 text-center flex flex-col justify-center items-center min-h-screen'>
      {
        !isAuthenticated
          ? <button onClick={loginWithRedirect}>Login</button>
          : <Chat />
      }
    </div>
  )
}
