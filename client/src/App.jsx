import { useState, useEffect } from 'react'
import { Chat } from './pages/Chat'
import { RenderForm } from './components/RenderForm'

export function App () {
  const [token, setToken] = useState(null)
  const isLocalToken = JSON.parse(window.localStorage.getItem('token'))

  useEffect(() => {
    if (!isLocalToken) window.localStorage.setItem('token', JSON.stringify(token))
    else setToken(isLocalToken)
  }, [])

  return (
    <div className='max-w-7xl mx-auto p-8 text-center flex flex-col justify-center items-center min-h-screen'>
      {
        !token
          ? <RenderForm setToken={setToken} />
          : <Chat />
      }
    </div>
  )
}
