import { useAuth0 } from '@auth0/auth0-react'
import { Chat } from './pages/Chat'
import { Home } from './pages/Home'

export function App () {
  const { isAuthenticated } = useAuth0()

  return (
    <div className='max-w-7xl mx-auto flex justify-center items-center min-h-screen gap-5'>
      {
        !isAuthenticated
          ? <Home />
          : <Chat />
      }
    </div>
  )
}
